import React, {useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    alert("پیام شما ثبت شد")
    setForm({
      name: "",
      email: "",
      message: "",
    })
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl mt-10'
      >
        <p className={styles.sectionSubText}>با ما در ارتباط باشید</p>
        <h3 className={styles.sectionHeadText}>تماس با ما</h3>

        <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>نام شما</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="نام و نام خانوادگی"
              className='bg-green-400 py-4 px-6 placeholder:text-slate-700 text-slate-700 rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>ایمیل شما</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="ایمیل شما"
              className='bg-green-400 py-4 px-6 placeholder:text-slate-700 text-slate-700 rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>پیام شما</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='چیزی را در این کادر بنویسید.'
              className='bg-green-400 py-4 px-6 placeholder:text-slate-700  text-slate-700 rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-green-400 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary font-VazirMedium'
          >
            {loading ? "درحال ارسال" : "ارسال"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
          <img src="contactusillu3.svg" className="dark:hidden w-full sm:w-[400px] lg:w-[460px] xl:w-[550px]" alt="تصویر تماس با ما"/>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
