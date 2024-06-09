import { FadingBalls, Spin } from "react-cssfx-loading";

export const LoadingProperties = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-60 bg-white">
        <FadingBalls color="#057A55" width="88px" height="22px" duration="0.6s" />
    </div>
  )
}
export const LoadingCard = () => {
  return (
    <div className="flex items-center h-96 justify-center w-full max-w-7xl bg-white">
      <div>
        <FadingBalls color="#057A55" width="88px" height="22px" duration="0.6s" />
      </div>
    </div>
  )
}
export const LoadingBtn = ({color}) => {
  return (
    <div className="flex items-center h-8 justify-center w-full max-w-7xl bg-transparent hover:text-gray-200">
        <Spin color={color} width="20px" height="20px" duration="0.6s" />
    </div>
  )
}
