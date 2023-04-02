import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
// import "./Form.css";

const Form = ({ data, handleSave, }) => {
    const InputStyles = "bottom-1 rounded-md p-2  border-solid border-[2px]";
  const ContactSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string().required('Required'),
    companyName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    city: Yup.string().min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
    state: Yup.string().min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
    details: Yup.string().min(5, 'Too Short!')
    .required('Required'),
    address: Yup.string().min(5, 'Too Short!')
    .required('Required'),
    projectSquare: Yup.string().min(5, 'Too Short!')
    .required('Required'),
    newOrOld: Yup.string().min(5, 'Too Short!')
    .required('Required'),
    details: Yup.string().min(5, 'Too Short!')
    .required('Required'),
     
  });
  
    return (
    <div className="flex flex-col justify-center items-center px-5 py-4 mb-8">
      <div className='flex justify-between flex-col gap-4 items-center mb-5'>
        <h3 className=" text-xl ss:text-3xl font-jost font-bold" >
       Request a proposal
        </h3>
        <div className=" w-10 h-[2px] bg-textOrange rounded-xl"></div>
      </div>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          companyName: '',
          city: '',
          state:'',
          details:'',
          address:'',
          projectSquare:'',
          setDate:'',
          CompletionDate:'',
          projectType:'',
          budget:'',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            handleSave(values);
            setSubmitting(false);
          }, 400);
        }}
       validationSchema={ContactSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          resetForm,
          
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className=' max-w-screen-smd  justify-center flex border-solid border-[2px] flex-col py-5 rounded-2xl'
          >
        
        <div className=" flex justify-center flex-col gap-4  md:grid md:grid-cols-3 md:grid-flow-row gap-y-6   py-5 p-8">

       
             
              <input
                id='firstName'
                type='text'
                name='firstName'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                className={InputStyles + (!errors.firstName && !touched.firstName) ? (` border-b-[2px] border-b-solid border-b-red-200`):`border-b-[2px] border-b-solid border-b-red-400`+"item1" }
                placeholder='firstName*'
               
                  >
                  </input>
                
            
             
             <input
               id='lastName'
               type='text'
               name='lastName'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.lastName}
               className={InputStyles + (errors.lastName && touched.lastName) ? (` border-b-[2px] border-b-solid border-b-green-400`):`border-b-[2px] border-b-solid border-b-red-400`+"item2" }
               placeholder='lastName*'
              
             />
             
        
             
             <input
               id='email'
               type="email"
               name='email'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.email}
               className={InputStyles + (errors.email&& touched.email) ? (` border-b-[2px] border-b-solid border-b-green-400`):`border-b-[2px] border-b-solid border-b-red-400`+"item3" }
               placeholder='email*'
              
             />
          <input
              id='city'
              type="text"
              name='city'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              className={InputStyles+" item4"}
              placeholder='city*'
             
            />
           {errors.city && touched.city ? (
             <div>{errors.city}</div>
           ) : null}
            
            <input
              id='state'
              type='text'
              name='state'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.state}
              className={InputStyles +" item5"}
              placeholder='state*'
             
            />
          
            
            <input
              id='phoneNumber'
              type='tel'
              name='phoneNumber'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
              className={InputStyles+"item6"}
              placeholder='phoneNumber*'
             
            />
             {errors.phoneNumber && touched.phoneNumber ? (
             <div>{errors.phoneNumber}</div>
           ) : null}
             
             <input
               id='companyName'
               type='text'
               name='companyName'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.companyName}
               className={`${InputStyles} item7 `}
               placeholder='companyName*'
              
             />
            {errors.companyName && touched.companyName ? (
             <div>{errors.companyName}</div>
           ) : null}
            
            
        

           <input
                id='address'
                type='text'
                name='address'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                className={InputStyles + (!errors.address && !touched.address) ? (` border-b-[2px] border-b-solid border-b-red-200`):`border-b-[2px] border-b-solid border-b-red-400`+" item8" }
                placeholder='Site Address*'
               
                  >
                  </input>
                
            
             
             <input
               id='projectSquare'
               type='text'
               name='projectSquare'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.projectSquare}
               className={InputStyles + (errors.projectSquare && touched.projectSquare) ? (` border-b-[2px] border-b-solid border-b-green-400`):`border-b-[2px] border-b-solid border-b-red-400`+" item9" }
               placeholder='Project Square Footage*'
              
             />
             <div className="item10">
                <label for="newOrOld">New building or Renovation?*</label>
             
             <select
               id='newOrOld'
               name='newOrOld'
               className={InputStyles}
        
             >
               <option value="New Building">New Building</option>
               <option value="Renovation">Renovation</option>
               
              

             </select>
             </div>

             <textarea
               id='details'
               name='details'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.details}
               className={`${InputStyles}`}
               placeholder='What can we help you with?'
                  maxLength={30}
                  
             />
        <div>
            <label>Bid Set Due Date (Approximate)*</label>
            <input
              id='setDate'
              type="date"
              name='setDate'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.setDate}
              className={InputStyles+" item12"}
              placeholder='state*'
             
            />
        </div>
        <div>
            <label>Construction Completion Date (Approximate)*</label>
            <input
              id='CompletetionDate'
              type="date"
              name='CompletetionDate'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.CompletetionDate} 
              className={InputStyles+" item13"}
              placeholder=''
             
            />
        </div>
        
        

         
             <div className=" item14">
                <label for="projectType">type of project*</label>
             
             <select
               id='projectType'
               name='projectType'
               className={InputStyles}
        
             >
               <option value="HVAC">HVAC</option>
               <option value="HVAC">HVAC</option>
               <option value="HVAC">HVAC</option>
               <option value="HVAC">HVAC</option>
              

             </select>
             </div>
             <input
                id='constructionBudget'
                type="number"
                name='budget'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.budget} 
                className={InputStyles + (!errors.address && !touched.address) ? (` border-b-[2px] border-b-solid border-b-red-200`):`border-b-[2px] border-b-solid border-b-red-400`+" item15" }
                placeholder='Costruction budget in inr'
               
                  >
                  </input>
                
            




         </div>
              
              
              
              
              <button
                className=' bg-textOrange mx-auto text-white text-lg ss:text-xl font-jost px-5 py-3 hover:scale-110 duration-200 rounded-xl max-w-max' 
                type='submit'
                disabled={isSubmitting}
              >
                Request A proposal
              </button>
            
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;