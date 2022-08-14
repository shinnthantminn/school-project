import FormControl from "../FormControl.jsx";
import { Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import ImageUploading from "react-images-uploading";
import { useEffect, useState } from "react";
import defaultUser from "../../../access/placeholder.png";
import { useSelector } from "react-redux";
import defaultImage from "../../../access/placeholder.png";
import { useNavigate } from "react-router-dom";

const validateSchema = yup.object({
  title: yup.string().required("This field was required?"),
  description: yup.string().required("This field was required"),
});

const EditPostForm = ({ submit, post }) => {
  const [avatar, setAvatar] = useState(defaultImage);
  const [images, setImages] = useState([]);
  const nav = useNavigate();
  const maxNumber = 69;

  useEffect(() => {
    if (!post.perPost) {
      nav(-1);
    } else if (post.perPost.image) {
      setAvatar(`http://localhost:4000/upload/Post/${post.perPost.image}`);
    }
  }, []);

  const initialValue = {
    title: post.perPost?.title,
    description: post.perPost?.description,
    image: "",
  };

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
        enableReinitialize={true}
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
                    src={images.length > 0 ? images[0]?.data_url : avatar}
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
              Edit Post
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EditPostForm;
