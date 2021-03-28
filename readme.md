## Typescript memo
### install
```
npm install -g ts-node typescript //global
npm install --save-dev ts-node typescript //dev dependency
```
### running files
```
ts-node -- file.ts
```
### Own types
```
type Operation = 'multiply' | 'add' | 'divide';
```
#### object type
```
interface result {
    days: number,
    training_days: number,
    original_target_value: number,
    avg_time: number,
    target_reached: number,
    rating: rating,
}
```
### Installing types
Types can be found from npm with @types prefix
```
npm install --save-dev @types/node
```
