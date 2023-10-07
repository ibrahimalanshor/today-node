import { connect as makeConnection } from 'mongoose';
import { dbConfig } from './config';

export async function connect() {
  if (!dbConfig.uri) {
    throw new Error('db uri is unset');
  }

  await makeConnection(dbConfig.uri);
}
