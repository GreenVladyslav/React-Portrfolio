const ContactsPage = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p><a href="https://goo.gl/maps/cyejSVtCRe4CzqZ1A">Kiev, Ukraine</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+380666302941">+38(066) 63 02 941</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:jrlimueno@gmail.com">jrlimueno@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default ContactsPage;