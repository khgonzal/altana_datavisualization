import React, { useState } from 'react';
import { Row, Col, Input, message, Spin } from 'antd';
import SearchCard from './SearchCard';

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setInput(e);
  };

  const fetchData = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      'X-Api-Key',
      'MTpJbnRlcnZpZXclMjAyMDIxLTA5LTIyOjE2MzIzNTk2NTU6NWNhMzViYjk.ZmEwZWI5OTdmYWJjYWFlZWJmY2YyNGYyN2FkMmQ5YzkwODQ4NWNiYg'
    );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    let response = await fetch(
      `https://api.altana.ai/atlas/v1/company/search/${input}`,
      requestOptions
    );

    if (response.status === 200) {
      let data = await response.json();
      setData(data.companies);
      setLoading(false);
    } else {
      message.error('Error retrieving data');
    }
  };
  return (
    <>
      <Row justify="center" style={{ marginTop: 25 }}>
        <Col>
          <Input.Search
            placeholder="input search text"
            onChange={(e) => handleChange(e.target.value)}
            value={input}
            onSearch={fetchData}
            style={{ width: 500 }}
            enterButton
          />
        </Col>
      </Row>
      {loading ? (
        <Row justify="center" style={{ marginTop: 15 }}>
          <Col>
            <Spin />
          </Col>
        </Row>
      ) : (
        data &&
        data.map((item) => (
          <Row justify="center" style={{ marginTop: 10 }}>
            <Col>
              <SearchCard item={item} />
            </Col>
          </Row>
        ))
      )}
    </>
  );
};

export default Search;
