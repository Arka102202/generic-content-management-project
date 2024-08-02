import { sizeClasses } from "./createClass/_size.js";

export const createClass = (className = "", styleTag) => {
    const classParts = className.split("-");
    if (/(wd|ht|size)$/.test(classParts[0]))
        styleTag.innerHTML += sizeClasses(className, classParts);

    if (classParts[0] === "d")
        styleTag.innerHTML += sizeClasses(className, classParts);

}




