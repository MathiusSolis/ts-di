1. Dependencias no recursivas:
    Utiliza el estandar de injección de los decoradores de TypeScript,
    sin la necesidad de utilizar los accesores. Compatible con los scopes:
    - Singleton (única instancias para todos).
    - Transient (una isntancia disntinta para todos).
    - ValatileObtaining (cada vez que se acceda al objeto, se obtiene una nueva).
2. Dependencias recursivas:
    Debe crearse un mapa de flujo de ejecución para lograr la inyección,
    Se debe tomar .
3. Root dependency:
    Es la clase raíz que desencadenara una ejecución.