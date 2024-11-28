// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: XiJnC74LVBXwv2GD5rQsh
// Component: bm_gjWBQdCTJ

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { AntdDatePicker } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import { datePickerHelpers as AntdDatePicker_Helpers } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import Button from "../../Button"; // plasmic-import: bZiONNXVM_of/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../t_15_imported_dep_4/plasmic.module.css"; // plasmic-import: LmQdyERnKGVSTHLkNgDKC/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: XiJnC74LVBXwv2GD5rQsh/projectcss
import sty from "./PlasmicPopUpReserve.module.css"; // plasmic-import: bm_gjWBQdCTJ/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: d2y9-OzVhadq/icon

createPlasmicElementProxy;

export type PlasmicPopUpReserve__VariantMembers = {
  isVisible2: "isVisible2";
  is: "is";
};
export type PlasmicPopUpReserve__VariantsArgs = {
  isVisible2?: SingleBooleanChoiceArg<"isVisible2">;
  is?: SingleBooleanChoiceArg<"is">;
};
type VariantPropType = keyof PlasmicPopUpReserve__VariantsArgs;
export const PlasmicPopUpReserve__VariantProps = new Array<VariantPropType>(
  "isVisible2",
  "is"
);

export type PlasmicPopUpReserve__ArgsType = {};
type ArgPropType = keyof PlasmicPopUpReserve__ArgsType;
export const PlasmicPopUpReserve__ArgProps = new Array<ArgPropType>();

export type PlasmicPopUpReserve__OverridesType = {
  root?: Flex__<"div">;
  h2?: Flex__<"h2">;
  dateTimePicker?: Flex__<typeof AntdDatePicker>;
  dateTimePicker2?: Flex__<typeof AntdDatePicker>;
  button?: Flex__<typeof Button>;
};

export interface DefaultPopUpReserveProps {
  isVisible2?: SingleBooleanChoiceArg<"isVisible2">;
  is?: SingleBooleanChoiceArg<"is">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPopUpReserve__RenderFunc(props: {
  variants: PlasmicPopUpReserve__VariantsArgs;
  args: PlasmicPopUpReserve__ArgsType;
  overrides: PlasmicPopUpReserve__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "dateTimePicker.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdDatePicker_Helpers)
      },
      {
        path: "dateTimePicker2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdDatePicker_Helpers)
      },
      {
        path: "isVisible2",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isVisible2
      },
      {
        path: "is",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.is
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootisVisible2]: hasVariant($state, "isVisible2", "isVisible2"),
          [sty.rootis]: hasVariant($state, "is", "is")
        }
      )}
      onClick={async event => {
        const $steps = {};

        $steps["updateIsVisible"] = true
          ? (() => {
              const actionArgs = {
                vgroup: "isVisible2",
                operation: 2,
                value: "isVisible2"
              };
              return (({ vgroup, value }) => {
                if (typeof value === "string") {
                  value = [value];
                }

                const oldValue = $stateGet($state, vgroup);
                $stateSet($state, vgroup, !oldValue);
                return !oldValue;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["updateIsVisible"] != null &&
          typeof $steps["updateIsVisible"] === "object" &&
          typeof $steps["updateIsVisible"].then === "function"
        ) {
          $steps["updateIsVisible"] = await $steps["updateIsVisible"];
        }

        $steps["updateDateTimePickerValue"] = true
          ? (() => {
              const actionArgs = {
                variable: {
                  objRoot: $state,
                  variablePath: ["dateTimePicker", "value"]
                },
                operation: 0
              };
              return (({ variable, value, startIndex, deleteCount }) => {
                if (!variable) {
                  return;
                }
                const { objRoot, variablePath } = variable;

                $stateSet(objRoot, variablePath, value);
                return value;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["updateDateTimePickerValue"] != null &&
          typeof $steps["updateDateTimePickerValue"] === "object" &&
          typeof $steps["updateDateTimePickerValue"].then === "function"
        ) {
          $steps["updateDateTimePickerValue"] = await $steps[
            "updateDateTimePickerValue"
          ];
        }
      }}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__sjQnR, {
          [sty.freeBoxisVisible2__sjQnRrFGe]: hasVariant(
            $state,
            "isVisible2",
            "isVisible2"
          ),
          [sty.freeBoxis__sjQnRyoAzp]: hasVariant($state, "is", "is")
        })}
      >
        <h2
          data-plasmic-name={"h2"}
          data-plasmic-override={overrides.h2}
          className={classNames(
            projectcss.all,
            projectcss.h2,
            projectcss.__wab_text,
            sty.h2,
            {
              [sty.h2isVisible2]: hasVariant($state, "isVisible2", "isVisible2")
            }
          )}
        >
          {"Check availability"}
        </h2>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___3WPpA
          )}
        >
          {"You'll be redirected in our booking website to check avaibilities."}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__k24My)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__elUh4
            )}
          >
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"From"}
              </span>
            </React.Fragment>
          </div>
          {(() => {
            const child$Props = {
              className: classNames("__wab_instance", sty.dateTimePicker),
              onChange: generateStateOnChangePropForCodeComponents(
                $state,
                "value",
                ["dateTimePicker", "value"],
                AntdDatePicker_Helpers
              ),
              popupScopeClassName: sty["dateTimePicker__datePickerPopup"],
              value: generateStateValueProp($state, ["dateTimePicker", "value"])
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "value",
                  plasmicStateName: "dateTimePicker.value"
                }
              ],
              [],
              AntdDatePicker_Helpers ?? {},
              child$Props
            );

            return (
              <AntdDatePicker
                data-plasmic-name={"dateTimePicker"}
                data-plasmic-override={overrides.dateTimePicker}
                {...child$Props}
              />
            );
          })()}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__zPse)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cGmur
            )}
          >
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"To"}
              </span>
            </React.Fragment>
          </div>
          {(() => {
            const child$Props = {
              className: classNames("__wab_instance", sty.dateTimePicker2),
              onChange: generateStateOnChangePropForCodeComponents(
                $state,
                "value",
                ["dateTimePicker2", "value"],
                AntdDatePicker_Helpers
              ),
              popupScopeClassName: sty["dateTimePicker2__datePickerPopup"],
              value: generateStateValueProp($state, [
                "dateTimePicker2",
                "value"
              ])
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "value",
                  plasmicStateName: "dateTimePicker2.value"
                }
              ],
              [],
              AntdDatePicker_Helpers ?? {},
              child$Props
            );

            return (
              <AntdDatePicker
                data-plasmic-name={"dateTimePicker2"}
                data-plasmic-override={overrides.dateTimePicker2}
                {...child$Props}
              />
            );
          })()}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___1ToKe)}>
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            color={"sand"}
            isDisabled={(() => {
              try {
                return (
                  $state.dateTimePicker2.value !== "" &&
                  $state.dateTimePicker2.value !== ""
                );
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return [];
                }
                throw e;
              }
            })()}
            link={(() => {
              try {
                return (
                  "https://www.booking.com/hotel/th/keemala.fr.html?aid=318615&label=French_Switzerland_FR_CH_29561951665-M9VZFx87coDtvNIFyOFa9QS637818831057%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55347738651%3Atidsa-302083110424%3Alp9187719%3Ali%3Adec%3Adm%3Aag29561951665%3Acmp389373625&sid=4678823f89add22d0ba835a16ea07602&checkin=" +
                  $state.dateTimePicker.value +
                  ";checkout=" +
                  $state.dateTimePicker2.value +
                  ";dest_id=-3414444;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1713193621;srpvid=1a526a3cabe002cb;type=total;ucfs=1&"
                );
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
          >
            {"Check availibility for this dates"}
          </Button>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h2", "dateTimePicker", "dateTimePicker2", "button"],
  h2: ["h2"],
  dateTimePicker: ["dateTimePicker"],
  dateTimePicker2: ["dateTimePicker2"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h2: "h2";
  dateTimePicker: typeof AntdDatePicker;
  dateTimePicker2: typeof AntdDatePicker;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPopUpReserve__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPopUpReserve__VariantsArgs;
    args?: PlasmicPopUpReserve__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPopUpReserve__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPopUpReserve__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPopUpReserve__ArgProps,
          internalVariantPropNames: PlasmicPopUpReserve__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPopUpReserve__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPopUpReserve";
  } else {
    func.displayName = `PlasmicPopUpReserve.${nodeName}`;
  }
  return func;
}

export const PlasmicPopUpReserve = Object.assign(
  // Top-level PlasmicPopUpReserve renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),
    dateTimePicker: makeNodeComponent("dateTimePicker"),
    dateTimePicker2: makeNodeComponent("dateTimePicker2"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicPopUpReserve
    internalVariantProps: PlasmicPopUpReserve__VariantProps,
    internalArgProps: PlasmicPopUpReserve__ArgProps
  }
);

export default PlasmicPopUpReserve;
/* prettier-ignore-end */