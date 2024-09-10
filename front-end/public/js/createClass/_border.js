import { colors } from "../mappings/_clr.js";
import { addValueToPropNVals, getClassDefinition, getCompleteClassDefinition, processValuePart } from "./_generic.js";

export const borderCLasses = (classParts = [], className = "") => {

  //  border_[t/r/b/l]-[max/min]_{breakpoint}-{wd_val_st_val_clr_val}
  //  border_[t/r/b/l]_[wd/st/clr/off]-[max/min]_{breakpoint}-value
  //  border_rad_[tr/br/bl/tl]_[max/min]_{breakpoint}-value

  //  outline_[t/r/b/l]-[max/min]_{breakpoint}-{wd_val_st_val_clr_val_off_val}
  //  outline_[t/r/b/l]_[wd/st/clr/off]-[max/min]_{breakpoint}-value

  const properties = [];
  const vals = [];

  const class1stParts = classParts[0].split("_");

  const propName1st = classParts[0].split("_")[0];

  const propDirPos = class1stParts.length === 2 ? -1 : (class1stParts.length === 3 ? 1 : null);
  const propDir = propDirPos ? class1stParts.at(propDirPos) : "";

  const propTypePos = class1stParts.length === 2 ? -1 : (class1stParts.length === 3 ? 2 : null);
  const propType = propTypePos ? class1stParts.at(propTypePos) : "";

  const valPart = classParts.at(-1);

  if (/^(wd|st|clr|off)$/.test(propType)) {
    if (propType === "clr") {
      addValueToPropNVals(properties, vals, [propName1st + directions[propDir] + "-color", processValuePart(valPart, colors)]);
    } else if (propType === "wd") {
      addValueToPropNVals(properties, vals, [propName1st + directions[propDir] + "-width", processValuePart(valPart, null, true)]);
    } else if (propType === "st") {
      addValueToPropNVals(properties, vals, [propName1st + directions[propDir] + "-style", processValuePart(valPart)]);
    } else if (propType === "off") {
      addValueToPropNVals(properties, vals, [propName1st + directions[propDir] + "-offset", processValuePart(valPart, null, true)]);
    }
  } else {

    const regexAll = /(?<=clr_)(?<clr>[^_]+)|(?<=wd_)(?<wd>[^_]+)|(?<=st_)(?<st>[^_]+)|(?<=off_)(?<off>[^_]+)/g;

    let match, clr = "#fff", wd = "1px", st = "solid", off;

    while ((match = regexAll.exec(valPart)) !== null) {
      if (match.groups.clr) clr = processValuePart(match.groups.clr, colors);
      if (match.groups.wd) wd = processValuePart(match.groups.wd, null, true);
      if (match.groups.st) st = processValuePart(match.groups.st)
      if (match.groups.off) off = processValuePart(match.groups.off, null, true)
    }

    addValueToPropNVals(properties, vals, [propName1st + directions[propDir], `${wd} ${st} ${clr} ${propName1st === "outline" ? off : ""}`]);
  }

  if (/^border_rad/.test(className)) {
    const radDir = class1stParts.length === 3 ? class1stParts.at(2) : "";

    if (radDir === "tr") {
      addValueToPropNVals(properties, vals, ["border-top-right-radius", processValuePart(valPart, null, true)]);
    } else if (radDir === "br") {
      addValueToPropNVals(properties, vals, ["border-bottom-right-radius", processValuePart(valPart, null, true)]);
    } else if (radDir === "bl") {
      addValueToPropNVals(properties, vals, ["border-bottom-left-radius", processValuePart(valPart, null, true)]);
    } else if (radDir === "tl") {
      addValueToPropNVals(properties, vals, ["border-top-left-radius", processValuePart(valPart, null, true)]);
    } else {
      addValueToPropNVals(properties, vals, ["border-radius", processValuePart(valPart, null, true)]);
    }
  }

  const classToBuild = getClassDefinition(properties, vals, className);
  return getCompleteClassDefinition(2, classToBuild, classParts);

}

export const ringClasses = (classParts = [], className = "") => {

  //  ring_[t/r/b/l]-[max/min]_{breakpoint}-[wd_value_clr_value] ==> using shadow

  const properties = [];
  const vals = [];

  const class1stParts = classParts[0].split("_");

  const propDirPos = class1stParts.length === 2 ? -1 : (class1stParts.length === 3 ? 1 : null);
  const propDir = propDirPos ? class1stParts.at(propDirPos) : "";

  const valPart = classParts.at(-1);

  const regexAll = /(?<=clr_)(?<clr>[^_]+)|(?<=wd_)(?<wd>[^_]+)/g;

  let clr = "#fff", wd = "1px";

  let match;

  while ((match = regexAll.exec(valPart)) !== null) {
    if (match.groups.clr) {
      clr = match.groups.clr;
    } if (match.groups.wd) {
      wd = match.groups.wd;
    }
  }

  if (propDir === "t") {
    addValueToPropNVals(properties, vals, ["box-shadow", `inset 0 ${processValuePart(wd, null, true)} 0 ${processValuePart(clr, colors)}`]);
  } else if (propDir === "r") {
    addValueToPropNVals(properties, vals, ["box-shadow", `inset -${processValuePart(wd, null, true)} 0 0 ${processValuePart(clr, colors)}`]);
  } else if (propDir === "b") {
    addValueToPropNVals(properties, vals, ["box-shadow", `inset 0 -${processValuePart(wd, null, true)} 0 ${processValuePart(clr, colors)}`]);
  } else if (propDir === "l") {
    addValueToPropNVals(properties, vals, ["box-shadow", `inset ${processValuePart(wd, null, true)} 0 0 ${processValuePart(clr, colors)}`]);
  } else {
    addValueToPropNVals(properties, vals, ["box-shadow", `inset 0 0 0 ${processValuePart(wd, null, true)} ${processValuePart(clr, colors)}`]);
  }

  const classToBuild = getClassDefinition(properties, vals, className);
  return getCompleteClassDefinition(2, classToBuild, classParts);
}

// ring offset using extra element

const directions = {
  t: "-top",
  r: "-right",
  b: "-bottom",
  l: "-left",
  "": ""
}