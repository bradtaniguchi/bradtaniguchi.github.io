/**
 * Type used for gettingInvalidProps
 */
export type PropAndValidator<T> = [keyof T, (data: T) => boolean];

/**
 * Utility function that can be used to get a list of props
 * that are "invalid" for a given type.
 */
export const getInvalidProps = <Data>(
  propsAndValidators: Array<PropAndValidator<Data>>,
  data: Data
): Array<keyof Data> =>
  propsAndValidators
    .filter(([, validatorFn]) => !validatorFn(data))
    .map(([prop]) => prop);
