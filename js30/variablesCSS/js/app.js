//Seleccionamos TODOS los inputs
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    //Para ver qué estamos seleccionando podemos usar este cl
    //console.log(this.value);
    const suffix = this.dataset.sizing || '';
    //Seleccionamos TODO el documento y le decimos que nos muestre el nombre de this
    // console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
