// @flow
import merge from 'deepmerge'

const overwriteArrayMerge = (
  target: Array<any>,
  source: Array<any>
): Array<any> => source

export const overwriteMerge = (target: Object, source: Object) => {
  return merge(target, source, { arrayMerge: overwriteArrayMerge })
}
