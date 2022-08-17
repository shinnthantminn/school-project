import ImageUploading from "react-images-uploading";
import { useEffect, useState } from "react";
import defaultUser from "../../../access/default.png";
import FormControl from "../FormControl.jsx";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { FaEnvelope, FaUser } from "react-icons/all";

const EditProfileForm = ({ submit }) => {
  const [images, setImages] = useState([]);
  const [avatar, setAvatar] = useState(defaultUser);
  const maxNumber = 69;

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.data?.avatar) {
      setAvatar(`http://localhost:4000/upload/User/${user.data.avatar}`);
    }
  }, [user.loading]);

  const initialValue = {
    username: user.data?.username,
    email: user.data?.email,
  };

  const validationSchema = yup.object({
    username: yup.string().required("This field was required"),
  });

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const onSubmit = (value) => {
    let formData = new FormData();
    if (images.length > 0) {
      formData.append("file", images[0].file);
    }
    formData.append("username", value.username);
    submit(formData);
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {(formik) => {
        return (
          <>
            <Form>
              <ImageUploading
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  <div className="upload__image-wrapper flex justify-center">
                    <button
                      type={"button"}
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                      className={"w-[170px] h-[170px] rounded-full"}
                    >
                      <img
                        src={images.length > 0 ? images[0]?.data_url : avatar}
                        className={"rounded-full w-full h-full object-cover"}
                        alt="userImage"
                      />
                    </button>
                    &nbsp;
                  </div>
                )}
              </ImageUploading>
              <FormControl
                control={"input"}
                type={"text"}
                name="username"
                Element={<FaUser className={"mr-2"} />}
                className={"form"}
                label={"Your Name"}
                labelClass={"flex items-center mt-5"}
                placeholder={"Your Name"}
              />
              <FormControl
                control={"input"}
                type={"text"}
                name="email"
                Element={<FaEnvelope className={"mr-2"} />}
                className={"form disabled:bg-gray-200"}
                label={"Your Name"}
                disabled={true}
                labelClass={"flex items-center mt-5"}
                placeholder={"Your Email"}
              />
              <button
                className="px-5 disabled:bg-gray-300 mt-10 w-full py-2 bg-cyan-800 text-white rounded"
                type={"submit"}
                disabled={!formik.dirty && !images.length > 0}
              >
                Update info
              </button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default EditProfileForm;
