import './Header.scss';

class Header {
    constructor() {
        this.header = document.createElement('header');

        this.header.className = 'header';

        return this.header;
    }
}

export default Header;
