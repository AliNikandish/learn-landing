import { Herobg } from "../assets";

const Hero = () => {
  return (

    <section className="mt-16 min-h-screen mx-auto bg-slate-200 pb-5 px-4">
      <div className="pt-10 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-y-10 flex-wrap lg:flex-nowrap justify-center lg:justify-between text-center lg:text-right">
          <div className="w-full sm:w-auto order-2 lg:order-1">
            <h2 className="font-morabba text-5xl lg:text-6xl text-zinc-700 dark:text-white leading-[80px] lg:leading-[96px]">
              ما به هر قیمتی <br className="hidden sm:inline" /> دوره تولید نمی
              کنیم!
            </h2>

            <p className="text-zinc-700 dark:text-white text-xl lg:text-2xl mt-5 sm:mt-6 lg:mt-7 max-w-[500px]">
              با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر
              و پیشرفت کن
            </p>
            <div className="flex items-center justify-center flex-wrap lg:justify-start gap-5 sm:gap-7 mt-6 sm:mt-10 lg:mt-12">
              <a href="#" className="bg-blue-500 p-2 rounded-full">
                از اینجا شروع کن
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-x-2.5 text-slate-500 dark:text-slate-400 group sm:text-xl"
              >
                <span className="w-10 h-10 bg-green-500 rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                    />
                  </svg>
                </span>
                <span>
                دوره های رایگان
                </span>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={Herobg}
              className="dark:hidden w-full sm:w-[400px] lg:w-[460px] xl:w-[550px]"
              alt="تصویر بخش هدر"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
