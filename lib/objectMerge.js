import merge from 'deepmerge'

const overwriteArrayMerge = (target, source) => source

export const overwriteMerge = (target, source) => {
  return merge(target, source, { arrayMerge: overwriteArrayMerge })
}
