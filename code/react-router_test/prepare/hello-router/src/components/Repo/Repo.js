import React from 'react';

function Repo({params}) {
    return <p>用户名:{params.name}, 仓库名:{params.repo}</p>
}

export default Repo;