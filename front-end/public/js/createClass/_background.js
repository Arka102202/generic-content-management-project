import { clips, origins, repeats } from "../mappings/_bg.js";
import { colors } from "../mappings/_clr.js";
import { addValueToPropNVals, getClassDefinition, getCompleteClassDefinition, processValuePart } from "./_generic.js";

// background
export const bgClasses = (classParts = [], className = "") => {

  // when to use a variable:
  // 1. image as url
  // 2. complex image
  // bg-[max/min]_{breakpoint}-[clr_val_img_val_pos_val_s_val_re_val_o_val_clp_val_att_val]
  // bg_[color_image_position_size_repeat_origin_clip_attachment]-[max/min]_{breakpoint}-value

  const properties = [];
  const vals = [];
  const valPart = classParts.at(-1);
  const prop1stPart = "background-"
  const isOnlyBg = classParts[0] === "bg";

  if (isOnlyBg) {
    const regexAll = /(?<=clr_)(?<clr>[^_]+)|(?<=img_)(?<img>[^_]+)|(?<=pos_)(?<pos>[^_]+)|(?<=s_)(?<s>[^_]+)|(?<=re_)(?<re>[^_]+)|(?<=o_)(?<o>[^_]+)|(?<=clp_)(?<clp>[^_]+)|(?<=att_)(?<att>[^_]+)/g;


    let match;

    while ((match = regexAll.exec(valPart)) !== null) {
      if (match.groups.clr) {
        addValueToPropNVals(properties, vals, [prop1stPart + "color", processValuePart(match.groups.clr, colors)]);
      } if (match.groups.img) {
        addValueToPropNVals(properties, vals, [prop1stPart + "image", processValuePart(match.groups.img)]);
      } if (match.groups.pos) {
        addValueToPropNVals(properties, vals, [prop1stPart + "position", processValuePart((match.groups.pos).replace(/([a-z])([A-Z])/g, '$1 $2'))]);
      } if (match.groups.s) {
        addValueToPropNVals(properties, vals, [prop1stPart + "size", processValuePart(match.groups.s)]);
      } if (match.groups.re) {
        addValueToPropNVals(properties, vals, [prop1stPart + "repeat", processValuePart(match.groups.re, repeats)]);
      } if (match.groups.o) {
        addValueToPropNVals(properties, vals, [prop1stPart + "origin", processValuePart(match.groups.o, origins)]);
      } if (match.groups.clp) {
        addValueToPropNVals(properties, vals, [prop1stPart + "clip", processValuePart(match.groups.clp, clips)]);
      } if (match.groups.att) {
        addValueToPropNVals(properties, vals, [prop1stPart + "attachment", processValuePart(match.groups.att)]);
      }
    }
  } else {

    const propLastPart = classParts[0].split("_").at(-1);
    let value = "";

    if (propLastPart === "color") {
      value = processValuePart(valPart, colors);
    } else if (propLastPart === "image") {
      value = processValuePart(valPart);
    } else if (propLastPart === "position") {
      const eachPart = valPart.split("_");

      eachPart.forEach(el => {
        if (/[0-9]/.test(el)) value += " " + processValuePart(el, null, true);
        else value += " " + el
      })
    } else if (propLastPart === "size") {
      const eachPart = valPart.split("_");

      eachPart.forEach(el => {
        if (/[0-9]/.test(el)) value += " " + processValuePart(el, null, true);
        else value += " " + el
      })
    } else if (propLastPart === "repeat") {
      value = processValuePart(valPart, repeats);
    } else if (propLastPart === "origin") {
      value = processValuePart(valPart, origins);
    } else if (propLastPart === "clip") {
      value = processValuePart(valPart, clips);
    } else if (propLastPart === "attachment") {
      value = processValuePart(valPart, repeats);
    }

    addValueToPropNVals(properties, vals, [prop1stPart + propLastPart, value]);

  }

  const classToBuild = getClassDefinition(properties, vals, className);
  return getCompleteClassDefinition(2, classToBuild, classParts);

}