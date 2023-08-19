import { useEffect, useState } from 'react'
import Style from './maps.module.css'
import axios from 'axios'
const Dashboard = () => {

    const [allcount, setAllCount] = useState()
    // console.log(allcount.active)
  
    useEffect(() => {
      axios.get(`https://disease.sh/v3/covid-19/all`)
        .then((res) => {
          setAllCount(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])

    if (!allcount) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{marginLeft:"5%"}}>
            {
                allcount ?
                    <div className={Style.main}>

                        <div className={Style.container}>
                            <div className={Style.title}>updated</div>
                            <span className="sub-title">{allcount.updated}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>cases</div>
                            <span className="sub-title">{allcount.cases}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>deaths</div>
                            <span className="sub-title">{allcount.deaths}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>todayDeaths</div>
                            <span className="sub-title">{allcount.todayDeaths}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>recovered</div>
                            <span className="sub-title">{allcount.recovered}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>todayRecovered</div>
                            <span className="sub-title">{allcount.todayRecovered}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>active</div>
                            <span className="sub-title">{allcount.active}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>critical</div>
                            <span className="sub-title">{allcount.critical}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>casesPerOneMillion</div>
                            <span className="sub-title">{allcount.casesPerOneMillion}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>deathsPerOneMillion
                            </div>
                            <span className="sub-title">{allcount.deathsPerOneMillion
                            }</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>tests</div>
                            <span className="sub-title">{allcount.tests}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>testsPerOneMillion</div>
                            <span className="sub-title">{allcount.testsPerOneMillion}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>population</div>
                            <span className="sub-title">{allcount.population}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>oneCasePerPeople
                            </div>
                            <span className="sub-title">{allcount.oneCasePerPeople
                            }</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>oneDeathPerPeople</div>
                            <span className="sub-title">{allcount.oneDeathPerPeople}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>oneTestPerPeople</div>
                            <span className="sub-title">{allcount.oneTestPerPeople}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>activePerOneMillion</div>
                            <span className="sub-title">{allcount.activePerOneMillion}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>recoveredPerOneMillion</div>
                            <span className="sub-title">{allcount.recoveredPerOneMillion}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>criticalPerOneMillion</div>
                            <span className="sub-title">{allcount.criticalPerOneMillion}</span>
                        </div>

                        <div className={Style.container}>
                            <div className={Style.title}>affectedCountries</div>
                            <span className="sub-title">{allcount.affectedCountries}</span>
                        </div>

                    </div>


                    : ""
            }
        </div>
    )
}

export default Dashboard
