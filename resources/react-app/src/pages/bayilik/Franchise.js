import "./Franchise.css";
import Clipath from "../../assets/Clip path group.png";
import { useFormik } from "formik";
import * as Yup from "yup";
function Franchise() {
    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            msg: "",
            email: "",
            phone: "",
            subject: "",
        },
        validationSchema: Yup.object({
            firstname: Yup.string().min(2).required("Zorunlu alan"),
            lastname: Yup.string().min(2).required("Zorunlu alan"),
            phone: Yup.string().min(2).required("Zorunlu alan"),
            subject: Yup.string(5).required("Zorunlu alan"),
            message: Yup.string(5).required("Zorunlu alan"),
        }),
        onSubmit: (values) => {
            console.log("form data", values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className="bayilik_form">
            <div className="bayilik_form_info">
                <h1>Merhaba!</h1>
                <div className="name_surname">
                    <div className="name_div">
                        <label htmlFor="name">İsim</label>
                        <input
                            className="py-1 px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                            type="text"
                            id="name"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                    <div className="name_div">
                        <label htmlFor="name">Soyisim</label>
                        <input
                            className="py-1 px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                            type="text"
                            id="surname"
                            name="surname"
                            onChange={formik.handleChange}
                            value={formik.values.surname}
                        />
                    </div>
                </div>
                <div className="e-mail">
                    <label htmlFor="email">E-mail</label>
                    <input
                        className="py-1 px-2 border-2 border-[#dcdcdc] "
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className="name_surname">
                    <div className="name_div">
                        <label htmlFor="name">Telefon</label>
                        <input
                            className="py-1 px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                            type="text"
                            id="phone"
                            name="phone"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                    </div>
                    <div className="name_div">
                        <label htmlFor="name">Konu</label>
                        <input
                            className="py-1 px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                            type="text"
                            id="subject"
                            name="subject"
                            onChange={formik.handleChange}
                            value={formik.values.subject}
                        />
                    </div>
                </div>
                <div className="e-mail">
                    <label htmlFor="message">Mesaj</label>
                    <input
                        className="p-7 border-2 border-[#dcdcdc]"
                        type="text"
                        id="msg"
                        name="msg"
                        onChange={formik.handleChange}
                        value={formik.values.msg}
                    />
                </div>
                <div className="mt-5 border-2 border-[#dcdcdc] bg-[#ff855a] p-2 w-36 text-center text-white mb-5 ">
                    <button type="submit">Mesaj Gönder</button>
                </div>
            </div>
            <div className="bayilik_col_right">
                <img src={Clipath} alt="bayilik_photo" />
            </div>
        </form>
    );
}

export default Franchise;
