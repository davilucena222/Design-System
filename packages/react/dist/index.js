"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar2,
  Box: () => Box,
  Button: () => Button,
  Checkbox: () => Checkbox2,
  Heading: () => Heading,
  MultiStep: () => MultiStep,
  Text: () => Text,
  TextArea: () => TextArea,
  TextInput: () => TextInput,
  Toast: () => Toast,
  Tooltip: () => Tooltip
});
module.exports = __toCommonJS(src_exports);

// src/styles/index.ts
var import_react = require("@stitches/react");
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors: void 0,
    fontSizes: void 0,
    fontWeights: void 0,
    fonts: void 0,
    lineHeights: void 0,
    radii: void 0,
    space: void 0
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});
Box.displayName = "Box";

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/Avatar/styles.ts
var Avatar = __toESM(require("@radix-ui/react-avatar"));
var AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$12",
  height: "$12",
  overflow: "hidden"
});
var AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
var import_phosphor_react = require("phosphor-react");
var import_jsx_runtime = require("react/jsx-runtime");
function Avatar2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AvatarContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, __spreadValues({}, props)),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_phosphor_react.User, {}) })
  ] });
}
Avatar2.displayName = "Avatar";

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$ignite500",
        "&:not(:disabled):hover": {
          backgroundColor: "$ignite300"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",
        "&:not(:disabled):hover": {
          backgroundColor: "$ignite500",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "$white"
        },
        "&:disabled": {
          color: "$gray600"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "baseline",
  "&:has(input:focus)": {
    borderColor: "$ignite300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "$regular"
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "regular",
  background: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});

// src/components/TextInput/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function TextInput(_a) {
  var _b = _a, { prefix } = _b, props = __objRest(_b, ["prefix"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(TextInputContainer, { children: [
    !!prefix && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Prefix, { children: prefix }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Input, __spreadValues({}, props))
  ] });
}
TextInput.displayName = "TextInput";

// src/components/TextArea.tsx
var TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,
  alignItems: "baseline",
  "&:focus": {
    outline: 0,
    borderColor: "$ignite300"
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/Checkbox/index.tsx
var import_phosphor_react2 = require("phosphor-react");

// src/components/Checkbox/styles.ts
var Checkbox = __toESM(require("@radix-ui/react-checkbox"));
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  bacgroundColor: "$gray900",
  borderRadius: "$xs",
  lineHeight: "0",
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid $gray900",
  '&[data-state="checked"]': {
    backgroundColor: "$ignite300"
  },
  "&:focus": {
    border: "2px solid $ignite300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  width: "$4",
  height: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Checkbox2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CheckboxContainer, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CheckboxIndicator, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_phosphor_react2.Check, { weight: "bold" }) }) }));
}
Checkbox2.displayName = "Checkbox";

// src/components/MultiStep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "$xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  gap: "$2",
  marginTop: "$1"
});
var Step = styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray600",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});

// src/components/MultiStep/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(MultiStepContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Label, { children: [
      "Passo ",
      currentStep,
      " de ",
      size
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Steps, { css: { "--steps-size": size }, children: Array.from({ length: size }, (_, i) => i + 1).map((step) => {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Step, { active: currentStep >= step }, step);
    }) })
  ] });
}
MultiStep.displayName = "MultiStep";

// src/components/Tooltip/styles.ts
var TooltipContainer = styled("div", {
  diplay: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "$3 $4",
  width: "13.68rem",
  background: "$gray900",
  borderRadius: "$sm",
  textAlign: "center"
});
var TooltipText = styled("p", {
  margin: "0 auto",
  fontFamily: "$tooltipFont",
  fontWeight: "$medium",
  lineHeight: "$short",
  color: "$gray100"
});
var ArrowContainer = styled("div", {
  marginTop: "-0.5rem",
  marginLeft: "7rem",
  svg: {
    color: "$gray900"
  }
});

// src/components/Tooltip/index.tsx
var import_vsc = require("react-icons/vsc");
var import_jsx_runtime5 = require("react/jsx-runtime");
function Tooltip(_a) {
  var _b = _a, { content } = _b, rest = __objRest(_b, ["content"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TooltipContainer, __spreadProps(__spreadValues({}, rest), { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TooltipText, { children: content }) })),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ArrowContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_vsc.VscTriangleDown, { size: "1.5rem" }) })
  ] });
}

// src/components/Toast/index.tsx
var import_phosphor_react3 = require("phosphor-react");

// src/components/Toast/styles.ts
var ToastContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "$3 $4",
  gap: "$1",
  width: "360px",
  background: "$gray800",
  border: "1px solid $gray600",
  borderRadius: "$sm"
});
var Header = styled("header", {
  width: "100%",
  height: "$8",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  svg: {
    width: "$xl",
    color: "$gray200"
  }
});
var TextToast = styled("p", {
  fontFamily: "$default",
  fontWeight: "$bold",
  fontSize: "$xl",
  lineHeight: "$base",
  color: "$white"
});
var Date = styled("span", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$sm",
  lineHeight: "$base",
  color: "$gray200"
});

// src/components/Toast/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Toast({ title, dateToast }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(ToastContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Header, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TextToast, { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_phosphor_react3.X, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Date, { children: dateToast })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Box,
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextArea,
  TextInput,
  Toast,
  Tooltip
});
