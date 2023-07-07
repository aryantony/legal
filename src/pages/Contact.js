import React from 'react'

function Contact(props) {
  const {langType,setLangType}=props;
  return (
    <>
      <section id="service" className="services pt-0">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <span>{langType?"Contact Us":"Kontakt oss"}</span>
            <h2>{langType?"Contact Us":"Kontakt oss"}</h2>

          </div>
          </div>
          </section>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

          <div className='contactFirm'>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987139.5998435628!2d3.5668872821155992!3d60.89710402245818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461639cb73ab5ebf%3A0xd4243f75d5b023b!2sVestland%2C%20Norway!5e0!3m2!1sen!2sin!4v1688725840530!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe className='mapcontact' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987139.5998435628!2d3.5668872821155992!3d60.89710402245818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461639cb73ab5ebf%3A0xd4243f75d5b023b!2sVestland%2C%20Norway!5e0!3m2!1sen!2sin!4v1688725840530!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>
            <div className="row gy-12 infocontact">

              <div className="col-lg-12">

                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>{langType?"Location":"Plassering"}:</h4>
                    <p>A-10 Adam Street
Vestland, NY 535022
Norway</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>{langType?"Email":"E-post"}:</h4>
                    <p>company@legalmatch.no</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>{langType?"Call":"Telefoner"}:</h4>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

              </div>


            </div>
          </div>
          {/* <!-- End Google Maps --> */}




        </div>
      </section>
    </>
  )
}

export default Contact