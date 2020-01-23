require('dotenv').config()
const fs = require('fs')
const fetch = require('node-fetch')

function getFontStyles (stylesArtboard) {
    // empty "spacers obj" wheree we will store all colors
    const fontStyles = {}
    // get "spacers" artboard
    const fontStylesAtrboard = stylesArtboard.filter(item => {
        return item.name === 'Typography'
    })[0].children

    fontStylesAtrboard.map((fontItem, i) => {
        if (fontItem.children) {
            let subFonts = {}

            // get all sub fonts
            fontItem.children.map(subFontItem => {
                const lineHeight = subFontItem.style.hasOwnProperty('lineHeightPercentFontSize') ? subFontItem.style.lineHeightPercentFontSize : subFontItem.style.lineHeightPercent

                let subFontObj = {
                    [subFontItem.name]: {
                        family: {
                            value: `${subFontItem.style.fontFamily}, Helvetica, sans-serif`,
                            type: 'typography'
                        },
                        size: {
                            value: `${subFontItem.style.fontSize}px`,
                            type: 'typography'
                        },
                        weight: {
                            value: subFontItem.style.fontWeight,
                            type: 'typography'
                        },
                        lineheight: {
                            value: `${(lineHeight / 100).toFixed(2)}`,
                            type: 'typography'
                        },
                        spacing: {
                            value:
                                subFontItem.style.letterSpacing !== 0
                                    ? `${subFontItem.style.letterSpacing}px`
                                    : 'normal',
                            type: 'typography'
                        }
                    }
                }
                // merge multiple subfonts objects into one
                Object.assign(subFonts, subFontObj)
            })

            //
            let fontObj = {
                [fontItem.name]: subFonts
            }

            Object.assign(fontStyles, fontObj)
        } else {
            let fontObj = {
                [fontItem.name]: {
                    family: {
                        value: `${fontItem.style.fontFamily}, ${
                            fontItem.style.fontPostScriptName
                        }, Helvetica, sans-serif`,
                        type: 'typography'
                    },
                    size: {
                        value: fontItem.style.fontSize,
                        type: 'typography'
                    },
                    weight: {
                        value: fontItem.style.fontWeight,
                        type: 'typography'
                    },
                    lineheight: {
                        value: `${(fontItem.style.lineHeightPercent / 100).toFixed(2)}`,
                        type: 'typography'
                    },
                    spacing: {
                        value:
                            fontItem.style.letterSpacing !== 0
                                ? `${fontItem.style.letterSpacing}px`
                                : 'normal',
                        type: 'typography'
                    }
                }
            }

            Object.assign(fontStyles, fontObj)
        }
    })

    return fontStyles
}

function getSpacers (stylesArtboard) {
    // empty "spacers obj" wheree we will store all colors
    const spacers = {}
    // get "spacers" artboard
    const spacersAtrboard = stylesArtboard.filter(item => {
        return item.name === 'Spacers'
    })[0].children

    spacersAtrboard.map(item => {
        const spacerObj = {
            [item.name]: {
                value: `${item.absoluteBoundingBox.height}px`,
                type: 'spacers'
            }
        }

        Object.assign(spacers, spacerObj)
    })

    return spacers
}

function getGrids (stylesArtboard) {
    // empty "grids obj" wheree we will store all colors
    const grids = {}
    // get "grids" artboard
    const gridsAtrboard = stylesArtboard.filter(item => {
        return item.name === 'Grids'
    })[0].children

    gridsAtrboard.map(item => {
        gridObj = {
            [item.name]: {
                count: {
                    value: item.layoutGrids[0].count,
                    type: 'grids'
                },
                gutter: {
                    value: `${item.layoutGrids[0].gutterSize}px`,
                    type: 'grids'
                },
                offset: {
                    value: `${item.layoutGrids[0].offset}px`,
                    type: 'grids'
                }
            }
        }

        Object.assign(grids, gridObj)
    })

    return grids
}

function getPalette (stylesArtboard) {
    // empty "palette obj" wheree we will store all colors
    const palette = {}
    // get "palette" artboard
    const paletteAtrboard = stylesArtboard.filter(item => {
        return item.name === 'Colors'
    })[0].children

    // get colors from each children
    paletteAtrboard.map(item => {
        function rbaObj (obj) {
            return item.fills[0].color[obj].toFixed(2) * 255
        }

        colorObj = {
            [item.name]: {
                value: `rgba(${Math.round(rbaObj('r'))}, ${Math.round(rbaObj('g'))}, ${Math.round(rbaObj('b'))}, ${item.fills[0].hasOwnProperty('opacity') ? item.fills[0].opacity.toFixed(2) : item.fills[0].color.a})`,
                type: 'color'
            }
        }

        Object.assign(palette, colorObj)
    })

    return palette
}

async function getStylesArtboard (figmaApiKey, figmaId) {
    const result = await fetch('https://api.figma.com/v1/files/' + figmaId, {
        method: 'GET',
        headers: {
            'X-Figma-Token': figmaApiKey
        }
    })
    const figmaTreeStructure = await result.json()

    const stylesArtboard = figmaTreeStructure.document.children.filter(item => {
        return item.name === 'Tokens'
    })[0].children

    baseTokeensJSON = {
        token: {
            grids: {},
            spacers: {},
            colors: {},
            typo: {}
        }
    }

    Object.assign(baseTokeensJSON.token.grids, getGrids(stylesArtboard))
    Object.assign(baseTokeensJSON.token.spacers, getSpacers(stylesArtboard))
    Object.assign(baseTokeensJSON.token.colors, getPalette(stylesArtboard))
    Object.assign(baseTokeensJSON.token.typo, getFontStyles(stylesArtboard))

    fs.writeFileSync('frontend/static/figma-tokens.json', JSON.stringify(baseTokeensJSON))
    StyleDictionary.buildAllPlatforms()

    return baseTokeensJSON
}

const StyleDictionary = require('style-dictionary').extend({
    source: ['frontend/static/figma-tokens.json'],
    platforms: {
        scss: {
            transformGroup: 'scss',
            buildPath: 'frontend/src/styles/tokens/',
            files: [
                {
                    destination: '_colors.scss',
                    format: 'scss/variables',
                    filter: {
                        type: 'color'
                    }
                },
                {
                    destination: '_typography.scss',
                    format: 'scss/variables',
                    filter: {
                        type: 'typography'
                    }
                },
                {
                    destination: '_grids.scss',
                    format: 'scss/variables',
                    filter: {
                        type: 'grids'
                    }
                },
                {
                    destination: '_spacers.scss',
                    format: 'scss/variables',
                    filter: {
                        type: 'spacers'
                    }
                }
            ]
        }
    }
})

getStylesArtboard(process.env.FIGMA_ACCESS_TOKEN, process.env.FIGMA_PAGE_ID)
