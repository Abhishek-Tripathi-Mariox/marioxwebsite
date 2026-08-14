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

// const ContactForm = ({ cityName }) => {

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
//   //       if (typeof window !== 'undefined' && window.gtag) {
//   //         window.gtag('event', 'conversion', {
//   //           'send_to': 'AW-11065360955/7n7CCLmx7-IZELuEsJwp'
//   //         });
//   //       }
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
//     <section className="bg-secondary">

//       <div className="container">

//         {/* <Heading className="mb-12 text-black" icon>
//           Get in Touch
//         </Heading> */}

//         <div className="flex items-center gap-2 mb-12 text-4xl font-bold leading-tight text-black md:text-7xl">
//           <span>Get in Touch</span>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="grid w-full gap-8">
//           <div>
//             <label htmlFor="name" className="inline-block text-black">Your Name</label>
//             <Controller
//               name="name"
//               control={control}
//               rules={{ required: 'Name is required' }}
//               render={({ field }) => (
//                 <input {...field} id="name" type="text" className="form-control !py-2 black-control" />
//               )}
//             />
//             {errors.name && <span className="text-red-500">{errors.name.message}</span>}
//           </div>

//           <div>
//             <label htmlFor="email" className="inline-block text-black">Email</label>
//             <Controller
//               name="email"
//               control={control}
//               rules={{
//                 required: 'Email is required',
//                 pattern: {
//                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                   message: 'Invalid email address',
//                 },
//               }}
//               render={({ field }) => (
//                 <input {...field} id="email" type="email" className="form-control !py-2  black-control" />
//               )}
//             />
//             {errors.email && <span className="text-red-500">{errors.email.message}</span>}
//           </div>

//           <div>
//             <label htmlFor="mobile" className="inline-block text-black">Mobile Number</label>
//             <Controller
//               name="mobile"
//               control={control}
//               rules={{
//                 required: 'Mobile number is required',
//                 pattern: {
//                   value: /^[0-9]{10}$/,
//                   message: 'Invalid mobile number (10 digits required)',
//                 },
//               }}
//               render={({ field }) => (
//                 <input {...field} id="mobile" type="tel" className="form-control !py-2  black-control" />
//               )}
//             />
//             {errors.mobile && <span className="text-red-500">{errors.mobile.message}</span>}
//           </div>

//           <div>
//             <label htmlFor="message" className="inline-block text-black">Message</label>
//             <Controller
//               name="message"
//               control={control}
//               rules={{ required: 'Message is required' }}
//               render={({ field }) => (
//                 <textarea {...field} id="message" className="form-control !py-2  black-control"></textarea>
//               )}
//             />
//             {errors.message && <span className="text-red-500">{errors.message.message}</span>}
//           </div>

//           <Controller
//             name="pageUrl"
//             control={control}
//             render={({ field }) => (
//               <input {...field} type="hidden" />
//             )}
//           />

//           <div>
//             <Button type="submit" disabled={isSubmitting} className="relative">
//               {isSubmitting ? (
//                 <>
//                   <span className="opacity-0">SEND ENQUIRY</span>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-6 h-6 border-b-2 border-black rounded-full animate-spin"></div>
//                   </div>
//                 </>
//               ) : (
//                 'SEND ENQUIRY'
//               )}
//             </Button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Heading from "../Heading/Heading";
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

const ContactForm = ({ cityName }) => {
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
    <section className="bg-secondary">
      <div className="container">
        <div className="flex items-center gap-2 mb-12 text-4xl font-bold leading-tight text-black md:text-7xl">
          <span>Get in Touch</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid w-full gap-8">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="inline-block text-black">
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
                  className="form-control !py-2 black-control"
                />
              )}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="inline-block text-black">
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
                  className="form-control !py-2 black-control"
                />
              )}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Phone Number Field */}
          <div>
            <label htmlFor="mobile" className="inline-block py-2 text-black">
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
                  inputClass="!bg-secondary text-black border border-gray-300 rounded-md px-4 !py-5 w-full"
                  buttonClass="!bg-secondary border-r border-gray-300"
                  containerClass="w-full"
                  inputStyle={{ width: "100%" }}
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

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="inline-block text-black">
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
                  className="form-control !py-2 black-control"
                ></textarea>
              )}
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>

          {/* Hidden Page URL Field */}
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

          {/* Submit Button */}
          <div>
            <Button type="submit" disabled={isSubmitting} className="relative">
              {isSubmitting ? (
                <>
                  <span className="opacity-0">SEND ENQUIRY</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-b-2 border-black rounded-full animate-spin"></div>
                  </div>
                </>
              ) : (
                "SEND ENQUIRY"
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
