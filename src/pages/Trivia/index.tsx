import { Formik } from "formik";
import React, { useState } from "react";
import { getTriviaData } from "../../hooks/trivia.hooks";
import useGetRequest from "../../queries/getRequest.query";
import * as Yup from "yup";
import { TriviaGameValues } from "../../types/Trivia.types";
import "./TriviaStyle.css";
import OptionBox from "../../components/OptionBox/OptionBox";
import { useQueryClient } from "react-query";

const TriviaGame = (props: any) => {
  const { isLoading, isError, data, error } = useGetRequest(
    "triviaData",
    getTriviaData
  );
  const [open, setopen] = useState(false);

  const queryClient = useQueryClient();

  const formikValidationObj = Yup.object({
    email: Yup.string().email().required("*Email is required"),
  });

  const submitHandler = (values: TriviaGameValues) => {
    if(values.email.toString() == sampleData?.email.toString()){
    queryClient.invalidateQueries("triviaData");
    }

  };

  const sampleData = data?.data.results[0];
  return(
    isLoading? <p>Loading...</p>:
    <div>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={formikValidationObj}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={submitHandler}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <form onSubmit={() => handleSubmit()}>
            <div style={{ marginLeft: "15px" }}>
              Type the email from the options below in the input section
            </div>
            <input
              style={{ marginLeft: "15px", width: "300px" }}
              onChange={handleChange("email")}
            ></input>
            {errors?<p  style={{ marginLeft: "15px", width: "300px",color:"#FF0000" }}>{errors.email}</p>:''}

            <OptionBox optionVal={sampleData?.gender} />
            <OptionBox optionVal={sampleData?.email} />
            <OptionBox optionVal={sampleData?.name?.first} />
            <OptionBox optionVal={sampleData?.name?.last} />
            
            
            <button
              style={{
                width: "100px",
                height: "50px",
                marginLeft: "30px",
                fontSize: "20px",
              }}
              onClick={(e) => { e.preventDefault() ;handleSubmit();}}
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>

    </div>
  );
};

export default TriviaGame;
