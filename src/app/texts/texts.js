const title = "Comida Rápida Transilvania";
const email = "katqamendieta@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = "+573105677877";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Comida Rápida Transilvania ofrece una deliciosa variedad de arepas, empanadas, hamburguesas, salchipapas y perros calientes. En nuestro local, te invitamos a disfrutar de la mejor calidad en comida rápida, con una experiencia única en cada bocado.",
        description2: "En Comida Rápida Transilvania, nos dedicamos a servirte con productos frescos y sabrosos. Ven y prueba nuestras especialidades, hechas con ingredientes de la más alta calidad para garantizarte la mejor experiencia."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Disfruta nuestra Calidad",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/share/VRqprMWYZYkN5gH3/?mibextid=qi2Omg",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
