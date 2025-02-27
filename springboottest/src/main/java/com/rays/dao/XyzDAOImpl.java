package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.XyzDTO;

@Repository
public class XyzDAOImpl extends BaseDAOImpl<XyzDTO> implements XyzDAOInt {

    @Override
    protected List<Predicate> getWhereClause(XyzDTO dto, CriteriaBuilder builder, Root<XyzDTO> qRoot) {

        List<Predicate> whereCondition = new ArrayList<>();

        if (dto.getId() != null && dto.getId() > 0) {
            whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
        }

        if (dto.getProduct() != null && !dto.getProduct().isEmpty()) {
            whereCondition.add(builder.like(qRoot.get("product"), dto.getProduct() + "%"));
        }
        
        
        if (dto.getDescription()!= null && !dto.getDescription().isEmpty()) {
            whereCondition.add(builder.like(qRoot.get("description"), dto.getDescription() + "%"));
        }
        
       
        
        if (dto.getAddedDate() != null) {
            whereCondition.add(builder.equal(qRoot.get("addedDate"), dto.getAddedDate()));
        }
        
        
        if (dto.getAmount() != null) {
            whereCondition.add(builder.equal(qRoot.get("amount"), dto.getAmount()));
        }

        

        return whereCondition;
    }

    @Override
    public Class<XyzDTO> getDTOClass() {
        return XyzDTO.class;
    }
}
