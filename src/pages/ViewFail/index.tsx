import React from "react";
import {Result} from 'antd';
import * as S from "./style"

function ViewFail() {
    return (
            <S.errorContent>
                <Result
                    status="404"
                    title="No Data."
                />
            </S.errorContent>
    );
}

export default ViewFail;