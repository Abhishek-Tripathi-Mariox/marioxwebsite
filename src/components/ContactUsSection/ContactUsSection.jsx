// 'use client'

// import React, { useEffect } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import Heading from '../Heading/Heading';
// import Button from '../Button/Button';
// import { toast } from 'react-hot-toast';

// const services = [
//   { serviceName: 'Web Development', serviceId: 'Web-Development' },
//   { serviceName: 'App Development', serviceId: 'App-Development' },
//   { serviceName: 'CMS', serviceId: 'CMS' },
//   { serviceName: 'Ecommerce', serviceId: 'Ecommerce' },
//   { serviceName: 'Other', serviceId: 'Other' },
// ];

// const ContactUsSection = ({ cityName }) => {
//   const { control, handleSubmit, formState: { errors }, reset, setValue } = useForm({
//     defaultValues: {
//       name: '',
//       email: '',
//       mobile: '',
//       message: '',
//       pageUrl: '',
//       services: Object.fromEntries(services.map(service => [service.serviceId, false]))
//     }
//   });
//   const [isSubmitting, setIsSubmitting] = React.useState(false);

//   useEffect(() => {
//     setValue('pageUrl', window.location.href);
//   }, [setValue]);

//   // const onSubmit = async (data) => {
//   //   setIsSubmitting(true);
//   //   try {
//   //     const response = await fetch('/api/contact', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(data),
//   //     });

//   //     if (response.ok) {
//   //       toast.success('Your message has been sent successfully!');
//   //       reset();
//   //     } else {
//   //       throw new Error('Failed to send message');
//   //     }
//   //   } catch (error) {
//   //     toast.error('An error occurred. Please try again later.');
//   //   } finally {
//   //     setIsSubmitting(false);
//   //   }
//   // };

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     try {
//       const contactRequest = fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       const inquiryPayload = {
//         fullName: data.name,
//         email: data.email,
//         phoneNumber: data.mobile,
//         slug: data.pageUrl,
//         city: cityName,
//         service: '',
//         message: data.message,
//       };

//       const inquiryRequest = fetch(`${process.env.NEXT_PUBLIC_BASE_INQUIRES_API_URL}/user/inquires`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(inquiryPayload),
//       });

//       const [contactResult, inquiryResult] = await Promise.allSettled([
//         contactRequest,
//         inquiryRequest,
//       ]);

//       const contactSuccess = contactResult.status === 'fulfilled' && contactResult.value.ok;
//       const inquirySuccess = inquiryResult.status === 'fulfilled' && inquiryResult.value.ok;

//       if (contactSuccess && inquirySuccess) {
//         toast.success('Your message has been sent successfully!');
//         if (typeof window !== 'undefined' && window.gtag) {
//           window.gtag('event', 'conversion', {
//             send_to: 'AW-11065360955/7n7CCLmx7-IZELuEsJwp',
//           });
//         }
//         reset();
//       } else {
//         if (!contactSuccess) {
//           console.error('Contact API failed', contactResult);
//         }
//         if (!inquirySuccess) {
//           console.error('Inquiry API failed', inquiryResult);
//         }
//         toast.error('One or more requests failed. Please try again.');
//       }
//     } catch (error) {
//       toast.error('An error occurred. Please try again later.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="bg-black">
//       <div className="bg-[url(/img/vertical-white-strip.svg)] bg-repeat-y bg-right-bottom section-pad md:bg-[length:90px_auto] bg-[length:30px_auto]">
//         <div className="container">
//           <div className="pr-10">
//             {/* <Heading className="mb-12 text-white" icon>
//               Get in Touch
//             </Heading> */}

//             <div className="flex flex-col items-start gap-2 mb-12 text-3xl font-semibold text-white sm:flex-row sm:items-center sm:text-5xl">
//               {/* Insert icon here manually if needed */}
//               <span>Get in Touch</span>
//             </div>

//             <form onSubmit={handleSubmit(onSubmit)} className="grid w-full gap-12 md:w-3/5">
//               <div>
//                 <label className="inline-block mb-4 text-white">
//                   Interested in
//                 </label>

//                 <div className="flex flex-wrap gap-3">
//                   {services.map(({ serviceName, serviceId }, index) => (
//                     <div className="form-service-select" key={index}>
//                       <Controller
//                         name={`services.${serviceId}`}
//                         control={control}
//                         render={({ field }) => (
//                           <>
//                             <input
//                               type="checkbox"
//                               id={serviceId}
//                               className="hidden"
//                               {...field}
//                               checked={field.value}
//                             />
//                             <label
//                               htmlFor={serviceId}
//                               className="text-12 md:text-14 border border-white py-2.5 px-4 md:px-6 text-white inline-block cursor-pointer duration-300 ease-out"
//                             >
//                               {serviceName}
//                             </label>
//                           </>
//                         )}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="name" className="inline-block text-white">Your Name</label>
//                 <Controller
//                   name="name"
//                   control={control}
//                   rules={{ required: 'Name is required' }}
//                   render={({ field }) => (
//                     <input {...field} id="name" type="text" className="form-control white-control" />
//                   )}
//                 />
//                 {errors.name && <span className="text-red-500">{errors.name.message}</span>}
//               </div>

//               <div>
//                 <label htmlFor="email" className="inline-block text-white">Email</label>
//                 <Controller
//                   name="email"
//                   control={control}
//                   rules={{
//                     required: 'Email is required',
//                     pattern: {
//                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                       message: 'Invalid email address',
//                     },
//                   }}
//                   render={({ field }) => (
//                     <input {...field} id="email" type="email" className="form-control white-control" />
//                   )}
//                 />
//                 {errors.email && <span className="text-red-500">{errors.email.message}</span>}
//               </div>

//               <div>
//                 <label htmlFor="mobile" className="inline-block text-white">Mobile Number</label>
//                 <Controller
//                   name="mobile"
//                   control={control}
//                   rules={{
//                     required: 'Mobile number is required',
//                     pattern: {
//                       value: /^[0-9]{10}$/,
//                       message: 'Invalid mobile number (10 digits required)',
//                     },
//                   }}
//                   render={({ field }) => (
//                     <input {...field} id="mobile" type="tel" className="form-control white-control" />
//                   )}
//                 />
//                 {errors.mobile && <span className="text-red-500">{errors.mobile.message}</span>}
//               </div>

//               <div>
//                 <label htmlFor="message" className="inline-block text-white">Message</label>
//                 <Controller
//                   name="message"
//                   control={control}
//                   rules={{ required: 'Message is required' }}
//                   render={({ field }) => (
//                     <textarea {...field} id="message" className="form-control white-control"></textarea>
//                   )}
//                 />
//                 {errors.message && <span className="text-red-500">{errors.message.message}</span>}
//               </div>

//               <Controller
//                 name="pageUrl"
//                 control={control}
//                 render={({ field }) => (
//                   <input {...field} type="hidden" />
//                 )}
//               />

//               <div>
//                 <Button type="submit" disabled={isSubmitting} className="relative">
//                   {isSubmitting ? (
//                     <>
//                       <span className="opacity-0">SEND ENQUIRY</span>
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-6 h-6 border-b-2 border-white rounded-full animate-spin"></div>
//                       </div>
//                     </>
//                   ) : (
//                     'SEND ENQUIRY'
//                   )}
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUsSection;

"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "../Button/Button";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const services = [
  { serviceName: "Web Development", serviceId: "Web-Development" },
  { serviceName: "App Development", serviceId: "App-Development" },
  { serviceName: "CMS", serviceId: "CMS" },
  { serviceName: "Ecommerce", serviceId: "Ecommerce" },
  { serviceName: "Other", serviceId: "Other" },
];

const ContactUsSection = ({ cityName }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
      pageUrl: "",
      company: "",
      services: Object.fromEntries(
        services.map((service) => [service.serviceId, false]),
      ),
    },
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  useEffect(() => {
    setValue("pageUrl", window.location.href);
  }, [setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const contactRequest = fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const inquiryPayload = {
        fullName: data.name,
        email: data.email,
        phoneNumber: data.mobile,
        slug: data.pageUrl,
        city: cityName,
        service: "",
        message: data.message,
      };

      const inquiryRequest = fetch(
        `${process.env.NEXT_PUBLIC_BASE_INQUIRES_API_URL}/user/inquires`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inquiryPayload),
        },
      );

      const [contactResult, inquiryResult] = await Promise.allSettled([
        contactRequest,
        inquiryRequest,
      ]);

      const contactSuccess =
        contactResult.status === "fulfilled" && contactResult.value.ok;
      const inquirySuccess =
        inquiryResult.status === "fulfilled" && inquiryResult.value.ok;

      if (contactSuccess && inquirySuccess) {
        toast.success("Your message has been sent successfully!");
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "conversion", {
            send_to: "AW-11065360955/7n7CCLmx7-IZELuEsJwp",
          });
        }
        reset();
      } else {
        if (!contactSuccess) console.error("Contact API failed", contactResult);
        if (!inquirySuccess) console.error("Inquiry API failed", inquiryResult);
        toast.error("One or more requests failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-black">
      <div className="bg-[url(/img/vertical-white-strip.svg)] bg-repeat-y bg-right-bottom section-pad md:bg-[length:90px_auto] bg-[length:30px_auto]">
        <div className="container">
          <div className="pr-10">
            <div className="flex flex-col items-start gap-2 mb-12 text-3xl font-semibold text-white sm:flex-row sm:items-center sm:text-5xl">
              <span>Get in Touch</span>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid w-full gap-12 md:w-3/5"
            >
              <div>
                <label className="inline-block mb-4 text-white">
                  Interested in
                </label>
                <div className="flex flex-wrap gap-3">
                  {services.map(({ serviceName, serviceId }, index) => (
                    <div className="form-service-select" key={index}>
                      <Controller
                        name={`services.${serviceId}`}
                        control={control}
                        render={({ field }) => (
                          <>
                            <input
                              type="checkbox"
                              id={serviceId}
                              className="hidden"
                              {...field}
                              checked={field.value}
                            />
                            <label
                              htmlFor={serviceId}
                              className="text-12 md:text-14 border border-white py-2.5 px-4 md:px-6 text-white inline-block cursor-pointer duration-300 ease-out"
                            >
                              {serviceName}
                            </label>
                          </>
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="name" className="inline-block text-white">
                  Your Name
                </label>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      id="name"
                      type="text"
                      className="form-control white-control"
                    />
                  )}
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="email" className="inline-block text-white">
                  Email
                </label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      id="email"
                      type="email"
                      className="form-control white-control"
                    />
                  )}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>

              {/* ✅ Updated PhoneInput to store value in format countrycode-number */}
              <div>
                <label
                  htmlFor="mobile"
                  className="inline-block py-2 text-white"
                >
                  Mobile Number
                </label>
                <Controller
                  name="mobile"
                  control={control}
                  rules={{
                    required: "Mobile number is required",
                    validate: (value) => {
                      if (!value) return "Mobile number is required";
                      const parts = value.split("-");
                      const dialCode = parts[0];
                      const number = parts[1] || "";
                      if (dialCode === "91") {
                        return (
                          /^[0-9]{10}$/.test(number) ||
                          "Indian mobile number must be exactly 10 digits"
                        );
                      }
                      return number.length >= 4 || "Mobile number is too short";
                    },
                  }}
                  render={({ field }) => (
                    <PhoneInput
                      country={"in"}
                      masks={{ in: ".....-....." }}
                      inputClass="!bg-transparent text-white !border !border-white-300 rounded-md px-4 !py-5 w-full"
                      buttonClass="!bg-transparent border border-white rounded-md"
                      buttonStyle={{
                        backgroundColor: "transparent",
                        borderBottom: "1px solid #ffffff",
                        borderRadius: "4px",
                      }}
                      containerClass="w-full"
                      inputStyle={{
                        width: "100%",
                        color: "white",
                        border: "1px solid #ffffff",
                        backgroundColor: "transparent",
                      }}
                      value={field.value ? field.value.replace("-", "") : ""}
                      onChange={(value, data) => {
                        const rawNumber = value.slice(data.dialCode.length);
                        const formatted = `${data.dialCode}-${rawNumber}`;
                        field.onChange(formatted);
                      }}
                      specialLabel=""
                      enableSearch
                    />
                  )}
                />
                {errors.mobile && (
                  <span className="text-red-500">{errors.mobile.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="message" className="inline-block text-white">
                  Message
                </label>
                <Controller
                  name="message"
                  control={control}
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      id="message"
                      className="form-control white-control"
                    ></textarea>
                  )}
                />
                {errors.message && (
                  <span className="text-red-500">{errors.message.message}</span>
                )}
              </div>

              <Controller
                name="pageUrl"
                control={control}
                render={({ field }) => <input {...field} type="hidden" />}
              />

              {/* Honeypot Field - hidden from real users, catches bots */}
              <Controller
                name="company"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: "1px",
                      height: "1px",
                      opacity: 0,
                    }}
                  />
                )}
              />

              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative"
                >
                  {isSubmitting ? (
                    <>
                      <span className="opacity-0">SEND ENQUIRY</span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 border-b-2 border-white rounded-full animate-spin"></div>
                      </div>
                    </>
                  ) : (
                    "SEND ENQUIRY"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
