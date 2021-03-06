/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The NetCordaCoreNodeServicesVaultColumnPredicateBetweenAllOf model module.
 * @module io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateBetweenAllOf
 * @version 1.0.0
 */
class NetCordaCoreNodeServicesVaultColumnPredicateBetweenAllOf {
    /**
     * Constructs a new <code>NetCordaCoreNodeServicesVaultColumnPredicateBetweenAllOf</code>.
     * @alias module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateBetweenAllOf
     */
    constructor() { 
        
        NetCordaCoreNodeServicesVaultColumnPredicateBetweenAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetCordaCoreNodeServicesVaultColumnPredicateBetweenAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateBetweenAllOf} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnPredicateBetweenAllOf} The populated <code>NetCordaCoreNodeServicesVaultColumnPredicateBetweenAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreNodeServicesVaultColumnPredicateBetweenAllOf();

            if (data.hasOwnProperty('rightToLiteral')) {
                obj['rightToLiteral'] = ApiClient.convertToType(data['rightToLiteral'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} rightToLiteral
 */
NetCordaCoreNodeServicesVaultColumnPredicateBetweenAllOf.prototype['rightToLiteral'] = undefined;






export default NetCordaCoreNodeServicesVaultColumnPredicateBetweenAllOf;

