import React from 'react';

import * as C from './styles';

interface Props {
    title: string;
}
export const Title = ({title}:Props) =>  <C.H1>{title}</C.H1>;