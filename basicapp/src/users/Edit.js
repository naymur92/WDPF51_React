import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Edituser from './Edituser';

function Edit() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    edituserlist(params.ids);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isuser, setuser] = useState([]);
  const [isloaduser, setloaduser] = useState(false);
  const edituserlist = async (ids) => {
    try {
      axios
        .post(`http://localhost/wdpf51_React/basicapp/api/getusers.php`, {
          userids: ids,
        })
        .then((res) => {
          // console.log(res.data.userlist.userdata[0]);

          setuser(res.data.userlist.userdata[0]);
          setloaduser(true);
        });
    } catch (error) {
      // throw error;
    }
  };

  return <div className="col-sm-8">{isloaduser && <Edituser list={isuser} />}</div>;
}

export default Edit;
