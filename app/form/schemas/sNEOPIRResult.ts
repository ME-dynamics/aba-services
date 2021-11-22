import { statusCodes, fluentSchema, errorSchema } from "aba-node";

const aGroup = fluentSchema
  .object()
  .prop("a1", fluentSchema.number().required())
  .prop("a2", fluentSchema.number().required())
  .prop("a3", fluentSchema.number().required())
  .prop("a4", fluentSchema.number().required())
  .prop("a5", fluentSchema.number().required())
  .prop("a6", fluentSchema.number().required())
  .prop("a", fluentSchema.number().required());
const cGroup = fluentSchema
  .object()
  .prop("c1", fluentSchema.number().required())
  .prop("c2", fluentSchema.number().required())
  .prop("c3", fluentSchema.number().required())
  .prop("c4", fluentSchema.number().required())
  .prop("c5", fluentSchema.number().required())
  .prop("c6", fluentSchema.number().required())
  .prop("c", fluentSchema.number().required());
const eGroup = fluentSchema
  .object()
  .prop("e1", fluentSchema.number().required())
  .prop("e2", fluentSchema.number().required())
  .prop("e3", fluentSchema.number().required())
  .prop("e4", fluentSchema.number().required())
  .prop("e5", fluentSchema.number().required())
  .prop("e6", fluentSchema.number().required())
  .prop("e", fluentSchema.number().required());
const nGroup = fluentSchema
  .object()
  .prop("n1", fluentSchema.number().required())
  .prop("n2", fluentSchema.number().required())
  .prop("n3", fluentSchema.number().required())
  .prop("n4", fluentSchema.number().required())
  .prop("n5", fluentSchema.number().required())
  .prop("n6", fluentSchema.number().required())
  .prop("n", fluentSchema.number().required());
const oGroup = fluentSchema
  .object()
  .prop("o1", fluentSchema.number().required())
  .prop("o2", fluentSchema.number().required())
  .prop("o3", fluentSchema.number().required())
  .prop("o4", fluentSchema.number().required())
  .prop("o5", fluentSchema.number().required())
  .prop("o6", fluentSchema.number().required())
  .prop("o", fluentSchema.number().required());

const response = {
  [statusCodes.OK]: fluentSchema
    .object()
    .prop(
      "payload",
      fluentSchema
        .object()
        .prop("aGroup", aGroup)
        .prop("cGroup", cGroup)
        .prop("eGroup", eGroup)
        .prop("nGroup", nGroup)
        .prop("oGroup", oGroup)
        .prop("warnings", fluentSchema.object().required())
        .prop("validation", fluentSchema.object().required())
    ),
};
