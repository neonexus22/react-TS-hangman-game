import React from 'react'

const Head = (
  <div
    key={'head'}
    className="w-[50px] h-[50px] rounded-full border-[6px] border-slate-900 absolute top-[40px] -right-[20px]"
  />
)
const Body = (
  <div
    key={'body'}
    className="w-2 h-[100px] bg-slate-900 absolute top-[90px] right-0"
  />
)
const LeftHand = (
  <div
    key={'lhand'}
    className="w-[70px] h-2 bg-slate-900 absolute top-[120px] right-[8px] rotate-45 origin-bottom-right"
  />
)
const RightHand = (
  <div
    key={'rhand'}
    className="w-[70px] h-2 bg-slate-900 absolute top-[120px] -right-[70px] -rotate-45 origin-bottom-left"
  />
)
const LeftLeg = (
  <div
    key={'lleg'}
    className="w-[70px] h-2 bg-slate-900 absolute top-[181px] right-0 -rotate-45 origin-bottom-right"
  />
)
const RightLeg = (
  <div
    key={'rleg'}
    className="w-[70px] h-2 bg-slate-900 absolute top-[180px] -right-[62px] rotate-45 origin-bottom-left"
  />
)

const BODY_PARTS = [Head, Body, RightHand, LeftHand, RightLeg, LeftLeg]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="w-2 h-[40px] bg-slate-900 absolute right-0 top-0" />
      <div className="w-[150px] h-2 bg-slate-900 ml-[120px]" />
      <div className="w-2 h-[300px] bg-slate-900 ml-[120px]" />
      <div className="h-2 w-[250px] bg-slate-900" />
    </div>
  )
}

export default HangmanDrawing
