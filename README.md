# rust wasm
this is very basic example of rust being compiled to wasm and run in a browser

## environment
install rust via rustup

After installing rust add wasm compile target:
```
rustup update
rustup target add wasm32-unknown-unknown --toolchain nightly
```

### npm
```
npm install
npm run compile-rust-wasm
```
After this you can start webpack dev server:
```
npm run start:dev
```