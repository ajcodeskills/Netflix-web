/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowseContainer} from '../container/Browse';
import {useContent} from '../hooks';
import {selectionFilter} from '../utils/selection-filter';

// eslint-disable-next-line require-jsdoc
export function Browse() {
  const {series} = useContent('series');
  const {films} = useContent('films');
  // console.log(series);
  const slides = selectionFilter({series, films});
  // console.log(slides);
  return <BrowseContainer slides={slides}/>;
}
