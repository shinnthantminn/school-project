import FormControl from "../FormControl.jsx";
import { Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import ImageUploading from "react-images-uploading";
import { useState } from "react";
import defaultUser from "../../../access/placeholder.png";

const initialValue = {
  title: "",
  description: "",
  image: "",
};

const validateSchema = yup.object({
  title: yup.string().required("This field was required?"),
  description: yup.string().required("This field was required"),
});

const CreatePostForm = ({ submit }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const onSubmit = (value) => {
    const formData = new FormData();
    if (images.length > 0) {
      formData.append("file", images[0].file);
    }
    formData.append("title", value.title);
    formData.append("description", value.description);
    submit(formData);
  };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form className="space-y-7">
          <FormControl
            control={"input"}
            name={"title"}
            className={"form !rounded-xl"}
            placeholder={"Post Title"}
          />
          <ImageUploading
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,

              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button
                  type={"button"}
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                  className={"w-full h-[400px]"}
                >
                  <img
                    src={images.length > 0 ? images[0]?.data_url : defaultUser}
                    className={"object-cover h-full w-full rounded-xl"}
                    alt="userImage"
                  />
                </button>
                &nbsp;
              </div>
            )}
          </ImageUploading>
          <ErrorMessage name={"image"} />
          <FormControl
            control={"textarea"}
            name={"description"}
            className={"form h-[400px] !rounded-xl"}
            placeholder={"Description"}
          />

          <div className="flex justify-center ">
            <button
              type={"submit"}
              className={
                "px-5 text-xl font-[600] py-2 rounded-full w-fit text-white bg-cyan-800"
              }
            >
              Create Now
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePostForm;
