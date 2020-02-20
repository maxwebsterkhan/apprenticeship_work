/* eslint-disable no-console */
import wait from 'waait';
import faker from 'faker';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import axios from 'axios';
import { intersection } from 'lodash';
import to from 'await-to-js';

async function go() {
        console.log('Going!');
        await wait(2000);
        console.log('Ending!');
}
go();

console.log(`Hello ${faker.name.firstName()}, ${faker.name.lastName()}`);

const date = new Date();

const formatted = format(date, `LLLL 'the' do y`);
console.log(formatted);

async function getJoke() {
        const { data } = await axios.get('https://icanhazdadjoke.com', {
                headers: {
                        Accept: 'application/json',
                },
        });
        console.log(data);
}
getJoke();

const a = [9, 1];

const b = [419];

const theSame = intersection(a, b);
console.log(theSame);

function checkIfNameIsCool(firstName) {
        return new Promise(function(resolve, reject) {
                if (firstName === 'wes') {
                        resolve('Cool Name');
                        return;
                }
                reject(new Error('Bad Name!'));
        });
}

async function checkName() {
        const [err, successValue] = await to(checkIfNameIsCool('wesj'));

        if (err) {
                console.log(err);
        } else {
                console.log(successValue);
        }
}
checkName();
