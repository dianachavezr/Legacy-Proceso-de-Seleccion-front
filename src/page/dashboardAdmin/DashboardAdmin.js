import React, { useContext, useEffect } from "react";
import CohorteGoal from "../../components/graphicsAdmin/CohorteGoal";
import FunnelDos from "../../components/graphicsAdmin/FunnelDos";
import DateMigrants from "../../components/graphicsAdmin/DateMigrants";
import AmountPassing from "../../components/graphicsAdmin/AmountPassing";
import LocationMigrants from "../../components/graphicsAdmin/LocationMigrants";
import "./DashboardAdmin.css";
import { providerContext } from "../../Context/status";

const DashboardAdmin = () => {
    const {
        getConvocatorys,
        convocatorys,
        getConvocatory,
        convocatory,
        getProfiles
    } = useContext(providerContext);

    const handleChange = (e) => {
        const id = e.target.value
        getConvocatory(id);
    }
    useEffect(() => {
        getConvocatorys();
        getProfiles()
    }, []);

    return (
        <>
            <div className="section__dash">
                <div className="section__content">
                    <span className="upperCase bold">
                        Dashboard Administrador
                    </span>
                </div>
                <div className="graphcsAdmin">
                    <div className="cohorteGoal__container">
                        <div className="cohorteGoal__container-title">
                            <h2 className="Dashboard-title">Meta de la cohorte</h2>
                        </div>
                        <div className="cohorteGoal__container-graph">
                            <select name="qualify" className="form-select" onChange={(e) => handleChange(e)}>
                                <option value="select">
                                    Selecione una Cohorte
                                </option>
                                {convocatorys.map((item) => (
                                    <option
                                        value={item._id}
                                        key={item._id}
                                    >
                                        {item.name}
                                    </option>
                                ))}
                            </select>

                            {convocatory.map((item) => (
                                <CohorteGoal item={item} key={item._id} />
                            ))}
                        </div>
                    </div>
                    <div className="funnel__container">
                        <div className="funnel__container-title">
                            <h2 className="Dashboard-title">Embudo de selección</h2>
                        </div>
                        <div className="funnel__container-graph">
                            {convocatory.map((item) => (
                                <FunnelDos item={item} key={item._id} />
                            ))}
                        </div>
                    </div>
                    <div className="funnel__container">
                        <div className="funnel__container-title">
                            <h2 className="Dashboard-title">Porcentaje que van pasando</h2>
                        </div>
                        <div className="funnel__container-graph">
                            {convocatory.map((item) => (
                                <AmountPassing item={item} key={item._id} />
                            ))}
                        </div>
                    </div>
                    <div className="funnel__container">
                        <div className="funnel__container-title">
                            <h2 className="Dashboard-title">Datos generales migrantes</h2>
                        </div>
                        <div className="funnel__container-graph">
                            {convocatory.map((item) => (
                                <DateMigrants item={item} key={item._id} />
                            ))}
                        </div>
                    </div>
                    {/* <div className="socialMedia__container">
                        <div className="socialMedia__container-title">
                            <h2 className="Dashboard-title">
                                ¿Dónde te enteraste de nosotros?
                            </h2>
                        </div>
                        <div className="socialMedia__container-graph">
                            {convocatory.map((item) => (
                                <SocialMedia item={item} key={item._id} />
                            ))}
                        </div>
                    </div> */}
                    <div className="socialMedia__container">
                        <div className="socialMedia__container-title">
                            <h2 className="Dashboard-title">
                                Departamento de residencia
                            </h2>
                        </div>
                        <div className="socialMedia__container-graph">
                            {convocatory.map((item) => (
                                <LocationMigrants item={item} key={item._id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardAdmin;