import { addValueToPropNVals, getClassDefinition, getCompleteClassDefinition, processValuePart } from "./_generic.js";

export const spacingClasses = (classParts = [], className = "") => {

  // p_[x/y/t/r/b/l]-[max/min]_{breakpoint}-value
  // m_[x/y/t/r/b/l]-[max/min]_{breakpoint}-value
  // p-[max/min]_{breakpoint}-valueX_valueY
  // m-[max/min]_{breakpoint}-valueX_valueY

  const properties = [];
  const vals = [];
  const propName = /^p/.test(classParts[0]) ? "padding" : "margin";
  const type = classParts[0].split("_").at(-1);
  const valParts = classParts.at(-1).split("_");

  if (valParts.length === 2) {
    addValueToPropNVals(properties, vals, [propName, `${processValuePart(valParts.at(0), null, true)} ${processValuePart(valParts.at(-1), null, true)}`]);
  } else {
    if (/^(r|x|p|m)/.test(type)) {
      addValueToPropNVals(properties, vals, [propName + "-right", processValuePart(classParts.at(-1), null, true)]);
    } if (/^(l|x|p|m)/.test(type)) {
      addValueToPropNVals(properties, vals, [propName + "-left", processValuePart(classParts.at(-1), null, true)]);
    } if (/^(t|y|p|m)/.test(type)) {
      addValueToPropNVals(properties, vals, [propName + "-top", processValuePart(classParts.at(-1), null, true)]);
    } if (/^(b|y|p|m)/.test(type)) {
      addValueToPropNVals(properties, vals, [propName + "-bottom", processValuePart(classParts.at(-1), null, true)]);
    }
  }


  const classToBuild = getClassDefinition(properties, vals, className);

  return getCompleteClassDefinition(2, classToBuild, classParts);

}