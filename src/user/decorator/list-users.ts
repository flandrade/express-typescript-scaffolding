import { mapObjIndexed, pick } from "ramda";

import { parseNumber } from "../../normalizers/parsers";
import { ListUserParams } from "../model";

type RawInput = string;

interface ListUserRaw {
  limit: string;
}

type ParamMapper = {
  [P in keyof ListUserParams]: (input: RawInput) => ListUserParams[P];
};

const paramMapper: ParamMapper = {
  limit: parseNumber
};

export default function toListParams(
  rawParams: ListUserRaw
  ): ListUserParams {
  const validParams = pick(Object.keys(paramMapper), rawParams);

  const params = mapObjIndexed((value, param) => {
    return paramMapper[param](value);
  }, validParams);

  return params as ListUserParams;
}
