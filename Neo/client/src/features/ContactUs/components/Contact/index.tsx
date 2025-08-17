import React from 'react'
import { ContactCard } from '../../common/ContactCard'

const Contact = () => {
    const ContactData = [
        {
            img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Contact-us-single-img-01.jpg",
            name: "Optical shop",
            adress: "34 88th St, Flushing, NY 11372",
            mail: "mail: neoocular1@qodeinetractive.com",
            phone: "tel: (+971) 204 2033 6611"
        },
        {
            img: "	https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Contact-us-single-img-02.jpg",
            name: "Our Clinic Shop",
            adress: "235 N Edison St, Arlington, VA 22203",
            mail: "mail: neoocular2@qodeinetractive.com",
            phone: "tel: (+971) 204 2033 6611"
        },
        {
            img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Contact-us-single-img-03.jpg",
            name: "our clinic",
            adress: "1705-1799 D Ave, Baltimore, MD 21213",
            mail: "mail: neoocular3@qodeinetractive.com",
            phone: "tel: (+971) 204 2033 6611"
        }
    ];
  return (
    <div className='container mx-auto pt-37.5 pb-25'>
      <div className='grid grid-cols-3 gap-7.5'>
        {ContactData.map((item,idx) => (
          <ContactCard
            key={idx}
            img={item.img}
            name={item.name}
            adress={item.adress}
            mail={item.mail}
            phone={item.phone}
          />
        ))}
      </div>
      <div className='grid grid-cols-3 gap-7.5 mt-30'>
        <div>
            <img className='h-[340px] w-full' src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i12!2i1206!3i1539!4i256!2m3!1e0!2sm!3i742501680!3m18!2sen-US!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjZ8cy5lOmd8cC5jOiNlOWU5ZTl8cC5sOjE3LHMudDo1fHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMCxzLnQ6NDl8cy5lOmcuZnxwLmM6I2ZmZmZmZnxwLmw6MTcscy50OjQ5fHMuZTpnLnN8cC5jOiNmZmZmZmZ8cC5sOjI5fHAudzowLjIscy50OjUwfHMuZTpnfHAuYzojZmZmZmZmfHAubDoxOCxzLnQ6NTF8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE2LHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMuZTpsLnQuc3xwLnY6b258cC5jOiNmZmZmZmZ8cC5sOjE2LHMuZTpsLnQuZnxwLnM6MzZ8cC5jOiMzMzMzMzN8cC5sOjQwLHMuZTpsLml8cC52Om9mZixzLnQ6NHxzLmU6Z3xwLmM6I2YyZjJmMnxwLmw6MTkscy50OjF8cy5lOmcuZnxwLmM6I2ZlZmVmZXxwLmw6MjAscy50OjF8cy5lOmcuc3xwLmM6I2ZlZmVmZXxwLmw6MTd8cC53OjEuMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750&key=AIzaSyD22X4Ip9FFdw7n859we5Pmd1npp01pc8Q&token=53374" alt="" />
        </div>
        <div>
            <img className='h-[340px] w-full' src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i12!2i1206!3i1539!4i256!2m3!1e0!2sm!3i742501680!3m18!2sen-US!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjZ8cy5lOmd8cC5jOiNlOWU5ZTl8cC5sOjE3LHMudDo1fHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMCxzLnQ6NDl8cy5lOmcuZnxwLmM6I2ZmZmZmZnxwLmw6MTcscy50OjQ5fHMuZTpnLnN8cC5jOiNmZmZmZmZ8cC5sOjI5fHAudzowLjIscy50OjUwfHMuZTpnfHAuYzojZmZmZmZmfHAubDoxOCxzLnQ6NTF8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE2LHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMuZTpsLnQuc3xwLnY6b258cC5jOiNmZmZmZmZ8cC5sOjE2LHMuZTpsLnQuZnxwLnM6MzZ8cC5jOiMzMzMzMzN8cC5sOjQwLHMuZTpsLml8cC52Om9mZixzLnQ6NHxzLmU6Z3xwLmM6I2YyZjJmMnxwLmw6MTkscy50OjF8cy5lOmcuZnxwLmM6I2ZlZmVmZXxwLmw6MjAscy50OjF8cy5lOmcuc3xwLmM6I2ZlZmVmZXxwLmw6MTd8cC53OjEuMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750&key=AIzaSyD22X4Ip9FFdw7n859we5Pmd1npp01pc8Q&token=53374" alt="" />
        </div>
        <div>
            <img className="h-[340px] w-full" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i12!2i1206!3i1539!4i256!2m3!1e0!2sm!3i742501680!3m18!2sen-US!3sUS!5e18!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjZ8cy5lOmd8cC5jOiNlOWU5ZTl8cC5sOjE3LHMudDo1fHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMCxzLnQ6NDl8cy5lOmcuZnxwLmM6I2ZmZmZmZnxwLmw6MTcscy50OjQ5fHMuZTpnLnN8cC5jOiNmZmZmZmZ8cC5sOjI5fHAudzowLjIscy50OjUwfHMuZTpnfHAuYzojZmZmZmZmfHAubDoxOCxzLnQ6NTF8cy5lOmd8cC5jOiNmZmZmZmZ8cC5sOjE2LHMudDoyfHMuZTpnfHAuYzojZjVmNWY1fHAubDoyMSxzLnQ6NDB8cy5lOmd8cC5jOiNkZWRlZGV8cC5sOjIxLHMuZTpsLnQuc3xwLnY6b258cC5jOiNmZmZmZmZ8cC5sOjE2LHMuZTpsLnQuZnxwLnM6MzZ8cC5jOiMzMzMzMzN8cC5sOjQwLHMuZTpsLml8cC52Om9mZixzLnQ6NHxzLmU6Z3xwLmM6I2YyZjJmMnxwLmw6MTkscy50OjF8cy5lOmcuZnxwLmM6I2ZlZmVmZXxwLmw6MjAscy50OjF8cy5lOmcuc3xwLmM6I2ZlZmVmZXxwLmw6MTd8cC53OjEuMg!4e0!5m2!1e3!5f2!23i46991212!23i47054750&key=AIzaSyD22X4Ip9FFdw7n859we5Pmd1npp01pc8Q&token=53374" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Contact
