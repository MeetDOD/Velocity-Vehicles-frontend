import React, { useEffect, useState } from 'react'
import '../styles/brands.css'
import axios from 'axios'

const Brands = () => {
    const [brand, setBrand] = useState([])

    const getAllBrand = async () => {
        try {
            const { data } = await axios.get('https://velocity-vehicles-backend-production.up.railway.app/api/brand/getAll-brand')
            if (data.success) {
                setBrand(data.brand)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllBrand()
    })
    return (
        <div>
            <section id="brands" className="brand_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <p className="brand_subtitle">A Wide Range of Brands Awaits!</p>
                            <h2 className="brand_title">Brands showcase</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {brand?.map(c => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 showcase_card">
                                <a href="#faq">
                                    <img
                                        decoding="async"
                                        src={`https://velocity-vehicles-backend-production.up.railway.app/${c.brandPictures}`}
                                        className="mb-4 img-fluid"
                                        style={{ maxWidth: '100%', maxHeight: '190px', objectFit: 'contain' }}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Brands
