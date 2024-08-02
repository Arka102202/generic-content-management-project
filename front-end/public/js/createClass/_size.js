import { breakPoints } from "../_variables.js";
import { addMediaQuery } from "./_generic.js";

export const sizeClasses = (className = "", classParts = []) => {
  // [max/min]_[wd/ht/size]-10 ==> width: 10%;
  // [max/min]_[wd/ht/size]-10(rem/vh/vw/px) => width: 10(rem/vh/vw/px);
  // [max/min]_[wd/ht/size]-xxl-[10/10(rem/vh/vw/px)] => add @query rule along with the class
  // [max/min]_[wd/ht/size]-[max/min]_xxl-[10/10(rem/vh/vw/px)] => add @query rule along with the class

  const len = classParts.length;
  const val = classParts.at(-1);
  let propNVal = !isNaN(Number(classParts.at(-1))) ? val + "%" : val;
  let classToBuild = `.${className}{
        ${/(wd|size)$/.test(classParts[0]) ? `${!/^(max|min)/.test(classParts[0]) ? "" : `${classParts[0].split("_")[0]}-`}width: ${propNVal};` : ""}                  
        ${/(ht|size)$/.test(classParts[0]) ? `${!/^(max|min)/.test(classParts[0]) ? "" : `${classParts[0].split("_")[0]}-`}height: ${propNVal};` : ""}                               
    }`;

  if (len === 3) console.log(className, classParts[0].startsWith("min"));

  return len === 2 ? classToBuild : addMediaQuery(!/^(min)/.test(classParts[1]), breakPoints[classParts[1].split("_").at(-1)], classToBuild);
}

// aspect-ratio
export const aspectClasses = (classParts = [], className = "") => {

  // aspect_ratio-[max/min]_{breakpoint}-value



}