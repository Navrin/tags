import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

import * as i18n from 'i18n';

import * as tags from '../src';

@suite 
class Tests {
    @test('Buffer returns correctly')
    buffer() {
        const buf = Buffer.from("hello");
        const tag = tags.buffer`hello`;

        expect(tag.toString()).to.eq(buf.toString());        
    }

    @test('localization')
    local() {
        i18n.configure({
            locales: ['en', 'de'],
            directory: __dirname,
        });

        i18n.setLocale('de');

        const hello = tags.i18ntag`Hello World`;
        expect(hello).to.eq("Hallo Welt");
    }

    @test('custom-regexp')
    re() {
        const match = "hi";
        const regex = tags.re`${match}`;

        expect(regex.test(match)).to.be.ok;
    }
    
    @test('multi line regexp')
    multiline() {
        const match = "abc";
        const regex = tags.regex`a
            b // and
            c // hello
        `;

        expect(regex.test(match)).to.be.ok;
    }

    @test('shell')
    shell() {
        const echo = tags.sh`echo "hello!"`;

        expect(echo).to.eq("hello!");
    }
}

export default Tests;
