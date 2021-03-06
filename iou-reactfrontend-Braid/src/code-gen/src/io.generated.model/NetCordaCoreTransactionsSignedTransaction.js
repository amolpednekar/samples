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
import NetCordaCoreContractsStateRef from './NetCordaCoreContractsStateRef';
import NetCordaCoreCryptoTransactionSignature from './NetCordaCoreCryptoTransactionSignature';
import NetCordaCoreIdentityParty from './NetCordaCoreIdentityParty';
import NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction from './NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction';
import NetCordaCoreTransactionsCoreTransaction from './NetCordaCoreTransactionsCoreTransaction';
import NetCordaCoreTransactionsWireTransaction from './NetCordaCoreTransactionsWireTransaction';

/**
 * The NetCordaCoreTransactionsSignedTransaction model module.
 * @module io.generated.model/NetCordaCoreTransactionsSignedTransaction
 * @version 1.0.0
 */
class NetCordaCoreTransactionsSignedTransaction {
    /**
     * Constructs a new <code>NetCordaCoreTransactionsSignedTransaction</code>.
     * @alias module:io.generated.model/NetCordaCoreTransactionsSignedTransaction
     * @param sigs {Array.<module:io.generated.model/NetCordaCoreCryptoTransactionSignature>} 
     * @param id {String} Base 58 Encoded Secure Hash
     * @param inputs {Array.<module:io.generated.model/NetCordaCoreContractsStateRef>} 
     * @param references {Array.<module:io.generated.model/NetCordaCoreContractsStateRef>} 
     * @param notaryChangeTransaction {Boolean} 
     * @param missingSigners {Array.<String>} 
     */
    constructor(sigs, id, inputs, references, notaryChangeTransaction, missingSigners) { 
        
        NetCordaCoreTransactionsSignedTransaction.initialize(this, sigs, id, inputs, references, notaryChangeTransaction, missingSigners);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sigs, id, inputs, references, notaryChangeTransaction, missingSigners) { 
        obj['sigs'] = sigs;
        obj['id'] = id;
        obj['inputs'] = inputs;
        obj['references'] = references;
        obj['notaryChangeTransaction'] = notaryChangeTransaction;
        obj['missingSigners'] = missingSigners;
    }

    /**
     * Constructs a <code>NetCordaCoreTransactionsSignedTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreTransactionsSignedTransaction} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreTransactionsSignedTransaction} The populated <code>NetCordaCoreTransactionsSignedTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreTransactionsSignedTransaction();

            if (data.hasOwnProperty('txBits')) {
                obj['txBits'] = NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction.constructFromObject(data['txBits']);
            }
            if (data.hasOwnProperty('sigs')) {
                obj['sigs'] = ApiClient.convertToType(data['sigs'], [NetCordaCoreCryptoTransactionSignature]);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('tx')) {
                obj['tx'] = NetCordaCoreTransactionsWireTransaction.constructFromObject(data['tx']);
            }
            if (data.hasOwnProperty('coreTransaction')) {
                obj['coreTransaction'] = NetCordaCoreTransactionsCoreTransaction.constructFromObject(data['coreTransaction']);
            }
            if (data.hasOwnProperty('inputs')) {
                obj['inputs'] = ApiClient.convertToType(data['inputs'], [NetCordaCoreContractsStateRef]);
            }
            if (data.hasOwnProperty('references')) {
                obj['references'] = ApiClient.convertToType(data['references'], [NetCordaCoreContractsStateRef]);
            }
            if (data.hasOwnProperty('notary')) {
                obj['notary'] = NetCordaCoreIdentityParty.constructFromObject(data['notary']);
            }
            if (data.hasOwnProperty('networkParametersHash')) {
                obj['networkParametersHash'] = ApiClient.convertToType(data['networkParametersHash'], 'String');
            }
            if (data.hasOwnProperty('notaryChangeTransaction')) {
                obj['notaryChangeTransaction'] = ApiClient.convertToType(data['notaryChangeTransaction'], 'Boolean');
            }
            if (data.hasOwnProperty('missingSigners')) {
                obj['missingSigners'] = ApiClient.convertToType(data['missingSigners'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:io.generated.model/NetCordaCoreSerializationSerializedBytesNetCordaCoreTransactionsCoreTransaction} txBits
 */
NetCordaCoreTransactionsSignedTransaction.prototype['txBits'] = undefined;

/**
 * @member {Array.<module:io.generated.model/NetCordaCoreCryptoTransactionSignature>} sigs
 */
NetCordaCoreTransactionsSignedTransaction.prototype['sigs'] = undefined;

/**
 * Base 58 Encoded Secure Hash
 * @member {String} id
 */
NetCordaCoreTransactionsSignedTransaction.prototype['id'] = undefined;

/**
 * @member {module:io.generated.model/NetCordaCoreTransactionsWireTransaction} tx
 */
NetCordaCoreTransactionsSignedTransaction.prototype['tx'] = undefined;

/**
 * @member {module:io.generated.model/NetCordaCoreTransactionsCoreTransaction} coreTransaction
 */
NetCordaCoreTransactionsSignedTransaction.prototype['coreTransaction'] = undefined;

/**
 * @member {Array.<module:io.generated.model/NetCordaCoreContractsStateRef>} inputs
 */
NetCordaCoreTransactionsSignedTransaction.prototype['inputs'] = undefined;

/**
 * @member {Array.<module:io.generated.model/NetCordaCoreContractsStateRef>} references
 */
NetCordaCoreTransactionsSignedTransaction.prototype['references'] = undefined;

/**
 * @member {module:io.generated.model/NetCordaCoreIdentityParty} notary
 */
NetCordaCoreTransactionsSignedTransaction.prototype['notary'] = undefined;

/**
 * Base 58 Encoded Secure Hash
 * @member {String} networkParametersHash
 */
NetCordaCoreTransactionsSignedTransaction.prototype['networkParametersHash'] = undefined;

/**
 * @member {Boolean} notaryChangeTransaction
 */
NetCordaCoreTransactionsSignedTransaction.prototype['notaryChangeTransaction'] = undefined;

/**
 * @member {Array.<String>} missingSigners
 */
NetCordaCoreTransactionsSignedTransaction.prototype['missingSigners'] = undefined;






export default NetCordaCoreTransactionsSignedTransaction;

