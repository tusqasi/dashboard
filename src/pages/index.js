import { Montserrat, Lato } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const mons = Montserrat({ subsets: ["latin"], display: "swap" });
const lato = Lato({ subsets: ["latin"], display: "swap", weight: "400" });
export default function Home() {
  return (
    <main
      className={` ${lato.className} flex flex-row h-screen bg-[#4285F4] overflow-clip`}
    >
      <section
        className={`w-7/12 ${mons.className} font-bold text-4xl flex flex-col justify-center items-center bg-[#4285F4] `}
      >
        <div className="w-max text-white text-7xl  ">Board.</div>
      </section>
      <section className="flex flex-row flex-grow justify-center items-center w-10/12 bg-[#4285F4]">
        <div className="flex flex-row flex-grow justify-center items-center h-[150%] bg-white rotate-[10deg]">
          <div className="p-3 items-center w-max -rotate-[10deg]">
            <h1 className={` ${mons.className} font-bold text-3xl`}>Sign In</h1>
            <div className=" font-normal"> Sign in to your account </div>
            <div className="flex flex-col">
              <div className="text-sm text-[#858585] flex flex-row">
                <button
                  className="border-none bg-white flex flex-row 
								rounded-lg pl-2 pr-2 p-1"
                >
                  <span className="p-1">
                    {" "}
                    <Image
                      src="/images/google-icon.svg"
                      width={15}
                      height={15}
                    />{" "}
                  </span>
                  <span className="pl-1"> Sign in with Google </span>
                </button>
                <button
                  className="border-none bg-white flex flex-row
								rounded-lg pl-2 pr-2 p-1"
                >
                  <span className="pl-1 pr-1">
                    {" "}
                    <Image
                      src="/images/apple-icon.svg"
                      width={15}
                      height={15}
                    />{" "}
                  </span>
                  <span> Sign in with Google </span>
                </button>
              </div>
              <form className="">
                <div className="flex flex-col rounded-lg">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="focus:bg-[#EAEAEA] bg-[#F5F5F5] p-1 text-black rounded-lg"
                    defaultValue={"johndoe@gmail.com"}
                  />
                </div>
                <div className="flex flex-col rounded-lg">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="focus:bg-[#EAEAEA] bg-[#F5F5F5] p-1 rounded-lg text-black"
                    defaultValue={"ranodm"}
                  />
                </div>
              </form>
              <Link href="/forgotpassword" className="text-[#346BD4]">
                Forgot Password
              </Link>
              <button
                className={`bg-[#4285F4] text-white ${mons.className} font-semibold text-lg
							rounded-lg p-1 pt-2 pb-2
							`}
              >
                Sign In
              </button>
            </div>
            <span className=" ">
              Don't have an account?{" "}
              <Link className="text-[#346BD4]" href={"/register"}>
                Register Here
              </Link>{" "}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
