import { alignClasses, centerElemClasses, flexClasses, gapCLasses, gridClasses, justifyClasses, layoutClasses, orderClasses, overflowClasses, positionClasses, trblClasses, zIndexClasses } from "./createClass/_layout.js";
import { aspectClasses, sizeClasses } from "./createClass/_size.js";
import { varClass } from "./createClass/_var.js";

export const createClass = (className = "", styleTag) => {
    const classParts = className.split("-");
    const firstPart = classParts[0];
    if (/^(wd|ht|size)$/.test(firstPart)) {
        styleTag.innerHTML += sizeClasses(className, classParts);
    } else if (firstPart === "aspect_ratio") {
        styleTag.innerHTML += aspectClasses(classParts, className);
    } else if (firstPart === "d") {
        styleTag.innerHTML += layoutClasses(classParts, className);
    } else if (/^flex/.test(firstPart)) {
        styleTag.innerHTML += flexClasses(classParts, className);
    } else if (/^grid/.test(firstPart)) {
        styleTag.innerHTML += gridClasses(classParts, className);
    } else if (/^justify/.test(firstPart)) {
        styleTag.innerHTML += justifyClasses(classParts, className);
    } else if (/^(center_el|align_(right|left|bottom|top))/.test(firstPart)) {
        styleTag.innerHTML += centerElemClasses(classParts, className);
    } else if (/^align/.test(firstPart)) {
        styleTag.innerHTML += alignClasses(classParts, className);
    } else if (/gap$/.test(firstPart)) {
        styleTag.innerHTML += gapCLasses(classParts, className);
    } else if (firstPart === "order") {
        styleTag.innerHTML += orderClasses(classParts, className);
    } else if (firstPart === "pos") {
        styleTag.innerHTML += positionClasses(classParts, className);
    } else if (firstPart === "overflow") {
        styleTag.innerHTML += overflowClasses(classParts, className);
    } else if (firstPart === "zIndex") {
        styleTag.innerHTML += zIndexClasses(classParts, className);
    } else if (/^(right|left|bottom|top)/.test(firstPart)) {
        styleTag.innerHTML += trblClasses(classParts, className);
    } else if (/^vars/.test(firstPart)) {
        styleTag.innerHTML += varClass(classParts, className);
    }
}




