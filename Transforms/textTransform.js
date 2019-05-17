module.exports = {
    deMess: data => {
        //Oh crap, I hope it isn't one way
        return '';
    },

    mess: data => {
        const buffer = Buffer.from(data);

        for(let i = 0; i < buffer.length; i++){
            buffer[i] += i + 1;
        }

        return buffer.toString('base64');
    }
};