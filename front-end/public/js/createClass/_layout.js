// for display along with some basic properties
export const layoutCLasses = (classParts = [], className) => {

  // d-[max/min]_{breakpoint}-[block/inline/inline-block/flex/grid/none]
  // d-[max/min]_{breakpoint}-flex_[row/col]_c_c_[1/10(vw/vh/rem/px)]
  // d-[max/min]_{breakpoint}-grid_c_c









}

// flex properties
export const flexClasses = (classParts = [], className) => {

  // flex_dir-[max/min]_{breakpoint}-[row/col/row_r/col_r]
  // flex_grow-[max/min]_{breakpoint}-[0/1]
  // flex_shrink-[max/min]_{breakpoint}-[0/1]
  // flex_wrap-[max/min]_{breakpoint}-[wrap/no_wrap/wrap_r]
  // flex-[max/min]_{breakpoint}-[grow_shrink_basis]


  // flex_child-[max/min]_{breakpoint}-even
  // flex_child-[max/min]_{breakpoint}-fixed_wd
  // flex_child-[max/min]_{breakpoint}-auto

  // if any one of the last Three add the following:
  // .flex > * {
  //   max-width: 100%;
  // }

}


// grid properties
export const gridClasses = (classParts = [], className) => {

  // grid-[max/min]_{breakpoint}-col_colCount_repeat_[10/10(vw/vh/px/rem/fr)]
  // grid-[max/min]_{breakpoint}-col_colCount_repeat_[10/10(vw/vh/px/rem/fr)]-gap_[10/10(vw/vh/px/rem/fr)]
  // grid-[max/min]_{breakpoint}-col_colCount_repeat_[10/10(vw/vh/px/rem/fr)]-col_gap_[10/10(vw/vh/px/rem/fr)]
  // grid-[max/min]_{breakpoint}-col_colCount_10_20_30_(rem/vw/vh/px/fr)
  // grid-col_(auto-fit/auto-fill)_10(vw/vh/px/rem)
  // grid-[max/min]_{breakpoint}-col_1_2 or span_2


  // grid-[max/min]_{breakpoint}-row_repeat_[10/10(vw/vh/px/rem)]
  // grid-[max/min]_{breakpoint}-row-10_20_30_(rem/vw/vh/px)
  // grid-[max/min]_{breakpoint}-row_1_2 or span_2

}

// justify_[Content/items/self]
export const justifyClasses = (classParts = [], className = "") => {

  // justify_[content/items/self]-[max/min]_{breakpoint}-value



}

// align_[Content/items/self]
export const alignClasses = (classParts = [], className = "") => {

  // align_[content/items/self]-[max/min]_{breakpoint}-value



}

// gap
export const gapCLasses = (classParts = [], className = "") => {

  // gap-[max/min]_{breakpoint}-value
  // col_gap-[max/min]_{breakpoint}-value
  // row_gap-[max/min]_{breakpoint}-value



}


// order
export const orderClasses = (classParts = [], className = "") => {

  // order-[max/min]_{breakpoint}-value



}

// position
export const positionClasses = (classParts = [], className = "") => {

  // pos-[max/min]_{breakpoint}-value



}


// overflow
export const overflowClasses = (classParts = [], className = "") => {

  // overflow-[max/min]_{breakpoint}-value



}

// zIndex
export const zIndexClasses = (classParts = [], className = "") => {

  // zIndex-[max/min]_{breakpoint}-value



}